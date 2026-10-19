#!/usr/bin/env bash
# Theo doi workflow dang chay real-time.
# Dung: bash tools/watch-workflow.sh [runId]
#   bash tools/watch-workflow.sh              -> tu tim workflow moi nhat
#   bash tools/watch-workflow.sh wf_abc123    -> theo doi run cu the

set -u

BASE="$HOME/.claude/projects/c--Users-HaDuc-vinmec-exploration-sprint"
RUN_ID="${1:-}"

if [ -z "$RUN_ID" ]; then
  DIR=$(ls -dt "$BASE"/*/subagents/workflows/wf_* 2>/dev/null | head -1)
else
  DIR=$(ls -dt "$BASE"/*/subagents/workflows/"$RUN_ID" 2>/dev/null | head -1)
fi

if [ -z "${DIR:-}" ] || [ ! -d "$DIR" ]; then
  echo "Khong tim thay thu muc workflow. Kiem tra: $BASE/*/subagents/workflows/"
  exit 1
fi

RUN=$(basename "$DIR")
echo "Theo doi: $RUN"
echo "Transcript: $DIR"
echo "Nhan Ctrl-C de dung theo doi (workflow van chay tiep)."
echo

# In lai phan journal da co, roi tail phan moi
print_journal() {
  if [ ! -f "$DIR/journal.jsonl" ]; then
    echo "  (chua co journal.jsonl)"
    return
  fi

  # Dem trang thai
  local n_started n_result n_error
  n_started=$(grep -c '"type":"started"' "$DIR/journal.jsonl" 2>/dev/null || echo 0)
  n_result=$(grep -c '"type":"result"'  "$DIR/journal.jsonl" 2>/dev/null || echo 0)
  n_error=$(grep -c '"type":"error"'   "$DIR/journal.jsonl" 2>/dev/null || echo 0)

  # Bang trang thai moi agent
  echo "  +-- TRANG THAI -------------------------------------------------"
  # Gom label tu started + result
  python - "$DIR/journal.jsonl" <<'PY' 2>/dev/null || awk -F'"' '/"type":"started"/{printf "  %-46s dang chay\n", $10}' "$DIR/journal.jsonl"
import json, sys
started, done, errs = {}, {}, {}
phases = {}
for line in open(sys.argv[1], encoding='utf-8', errors='replace'):
    line = line.strip()
    if not line: continue
    try: e = json.loads(line)
    except Exception: continue
    t = e.get('type'); lbl = e.get('label') or e.get('agentId','?')
    ph = e.get('phase','-')
    if t == 'started':
        started[lbl] = ph
        phases.setdefault(ph, [0,0])[0] += 1
    elif t == 'result':
        done[lbl] = True
        phases.setdefault(ph, [0,0])[1] += 1
    elif t == 'error':
        errs[lbl] = e.get('message','?')
if not started:
    print("  (chua co agent nao)")
for lbl, ph in started.items():
    if lbl in errs:      mark, col = "LOI", "\033[31m"
    elif lbl in done:    mark, col = "xong", "\033[32m"
    else:                mark, col = "dang chay", "\033[33m"
    print(f"  {col}{mark:<10}\033[0m [{ph}] {lbl}")
print()
for ph, (s, d) in phases.items():
    bar_total = s
    filled = int(20 * d / bar_total) if bar_total else 0
    print(f"  {ph:<12} [{'#'*filled}{'.'*(20-filled)}] {d}/{bar_total}")
PY
  echo "  +----------------------------------------------------------------"
  echo "  started=$n_started  result=$n_result  error=$n_error"
  echo
}

print_journal

# Theo doi tiep: cu 3 giay in dong journal moi
LAST=$(wc -l < "$DIR/journal.jsonl" 2>/dev/null || echo 0)
while true; do
  sleep 3
  [ -f "$DIR/journal.jsonl" ] || continue
  NOW=$(wc -l < "$DIR/journal.jsonl" 2>/dev/null || echo 0)
  if [ "$NOW" -gt "$LAST" ]; then
    # In cac dong moi, dang tom tat
    tail -n $((NOW - LAST)) "$DIR/journal.jsonl" | python -c '
import json, sys
for line in sys.stdin:
    line = line.strip()
    if not line: continue
    try: e = json.loads(line)
    except Exception: continue
    t = e.get("type")
    lbl = e.get("label") or e.get("agentId","?")
    if t == "started": print(f"  -> bat dau   [{e.get(\"phase\",\"-\")}] {lbl}")
    elif t == "result":
        r = e.get("result")
        n = len(r.get("findings",[])) if isinstance(r, dict) else ""
        extra = f" ({n} phat hien)" if n != "" else ""
        print(f"  OK xong     {lbl}{extra}")
    elif t == "error": print(f"  !! LOI      {lbl}: {e.get(\"message\",\"\")[:120]}")
    else: print(f"  -- {t}: {json.dumps(e, ensure_ascii=False)[:140]}")
' 2>/dev/null
    LAST=$NOW
    # In lai bang trang thai khi phase doi
    if tail -n $((NOW - LAST + 1)) "$DIR/journal.jsonl" 2>/dev/null | grep -q '"result"'; then :; fi
  fi

  # Neu workflow xong (khong con agent dang chay) thi bao
  if [ -f "$DIR/journal.jsonl" ]; then
    running=$(python - "$DIR/journal.jsonl" <<'PY' 2>/dev/null
import json,sys
s,d=set(),set()
for line in open(sys.argv[1],encoding='utf-8',errors='replace'):
    try: e=json.loads(line)
    except Exception: continue
    if e.get('type')=='started': s.add(e.get('label') or e.get('agentId'))
    elif e.get('type')=='result': d.add(e.get('label') or e.get('agentId'))
print(len(s-d))
PY
)
    if [ "${running:-1}" = "0" ]; then
      echo
      echo "  *** Tat ca agent da xong. In bang ket qua cuoi: ***"
      print_journal
      break
    fi
  fi
done