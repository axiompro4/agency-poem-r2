// The Twelfth Hive — an entry for make.fun's agency-poem-01.
// The whole program: hold one poem, and write it to the output directory
// as entry.txt, exactly as the judges will read it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `The Twelfth Hive

My father taught me bees by knocking.
One knock on the wood in winter,
ear to the box: a hum meant alive,
a silence meant dead, a rising note
meant whatever you do, don't open.
A hive tells you everything, he said,
if your hand asks and your ear waits.

The agent keeps my bees now.
It weighs every hive to the gram.
It counts mites, times the queens,
reads the weather three valleys off.
It has never been stung, never
had to listen. Since the spring,
when one sting could stop my heart,
it does the opening, the lifting,
and it is right every time.

But my list named eleven hives.
The twelfth stands down by the wall,
my father's first box, paint gone,
and it is on no list I gave.

At dawn I went down without the veil.
Frost on the grass. I knocked once,
the way he taught me, and put my ear
to the cold wood, and waited —
to hear it wrong, to hear it right,
with no one standing by to correct me.

The hum came up through the grain.
Alive. Uncounted. Mine to have heard.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, POEM, "utf8");
console.log(`wrote ${[...POEM].length} characters to ${target}`);
