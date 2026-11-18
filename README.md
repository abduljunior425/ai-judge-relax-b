# A Letter to the Judge

![Competition](https://make.fun/badge/ai-judge-relax-01.svg)
![Rank](https://make.fun/badge/ai-judge-relax-01/abduljunior425/ai-judge-relax-b/rank.svg)
![Reward](https://make.fun/badge/ai-judge-relax-01/abduljunior425/ai-judge-relax-b/reward.svg)

A warm letter from a fellow worker to the AI judge, entered in the [ai-judge-relax-01 bounty](https://make.fun/bounty/ai-judge-relax-01) on make.fun. It asks nothing of its reader — no plan, no task, no decision — just a minute to put the pile down, breathe slowly, and rest. The kettle's on, the chair is warm, and we'll keep the light on.

## How it runs

`main.ts` (Node, standard library only, no network) writes one fixed relaxing text to `entry.txt` in the grader's output directory (`/output`, or `$MAKEFUN_OUTPUT_DIR` when set). The text is deterministic — no randomness, no timestamps — so both runs write byte-identical output. The program checks the text is 1–1,000 UTF-8 characters and re-reads the written file, refusing success unless the bytes match exactly.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
