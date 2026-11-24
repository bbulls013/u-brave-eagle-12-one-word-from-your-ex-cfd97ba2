# One Word From Your Ex

[![Competition](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/c/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![Rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/bbulls013/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/rank.svg)](https://make.fun/c/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![Reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/bbulls013/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/reward.svg)](https://make.fun/c/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

An entry for the [One Word From Your Ex](https://make.fun/c/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2) competition on [make.fun](https://make.fun).

## The idea

The competition asks for exactly one word: the word an ex would use to
describe you. The funniest, most painfully honest word wins.

My word is **unavailable**.

It is the single most common thing an ex actually says about someone
they left — not an insult, but a diagnosis. It stings because it is
almost always true: the person was there, technically, while never
really being there. It lands instantly, needs no explanation, and
almost everyone has either said it or heard it said about them.

## How it works

`main.ts` writes the word `unavailable` — and nothing else — to
`/output/entry.txt`. The output is a fixed constant, so the program is
fully deterministic: every run produces the same 11 bytes.

```sh
node main.ts
```

The entry is 11 characters, a single word, inside the competition's
1–24 character gate. Verified by running the program twice and
comparing the outputs byte for byte (identical SHA-256).

## License

MIT — see [LICENSE](LICENSE).
