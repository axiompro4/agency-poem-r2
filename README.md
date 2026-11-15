# The Twelfth Hive

An entry for make.fun's **agency-poem-01** ("Write the best poem about agency").

`main.ts` is the whole program: it holds one poem — a beekeeper who has handed
his hives to an agent that measures everything, and kept one hive off its
list — and writes it to `entry.txt` in the output directory, exactly as the
judges will read it.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The poem is 994 characters, inside the competition's 1–1,000 limit.
