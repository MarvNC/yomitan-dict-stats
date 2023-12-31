# Yomichan/Yomitan Dictionary Stats <!-- omit in toc -->

This is a collection of information about the dictionaries available for
[Yomichan](https://foosoft.net/projects/yomichan/)/[Yomitan](https://github.com/themoeway/yomitan)
so that you can see the description/metadata available, and see the number of
entries in each dictionary to get an idea of how extensive their coverage is.

You can run the script yourself by pasting the contents of
[generateStats.js](./generateStats.js) into your browser's console while on the
Yomitan options page.

## Dictionaries

- [Dictionaries](#dictionaries)
- [Japanese](#japanese)
  - [Japanese Frequency Dictionaries](#japanese-frequency-dictionaries)
  - [Japanese Bilingual Dictionaries](#japanese-bilingual-dictionaries)
  - [Japanese Grammar Dictionaries](#japanese-grammar-dictionaries)
  - [Japanese Kanji Frequency Dictionaries](#japanese-kanji-frequency-dictionaries)
  - [Japanese Kanji Dictionaries](#japanese-kanji-dictionaries)
  - [Japanese Monolingual Dictionaries](#japanese-monolingual-dictionaries)
  - [Japanese Pitch Accent Dictionaries](#japanese-pitch-accent-dictionaries)
- [Cantonese Dictionaries](#cantonese-dictionaries)
  - [Cantonese Term Dictionaries](#cantonese-term-dictionaries)
  - [Cantonese Term Frequency Dictionaries](#cantonese-term-frequency-dictionaries)
- [Mandarin Chinese](#mandarin-chinese)
  - [Mandarin Chinese Frequency Dictionaries](#mandarin-chinese-frequency-dictionaries)
  - [Mandarin Chinese Hanzi Dictionaries](#mandarin-chinese-hanzi-dictionaries)
  - [Mandarin Chinese Bilingual Term Dictionaries](#mandarin-chinese-bilingual-term-dictionaries)
  - [Mandarin Chinese Monolingual Term Dictionaries](#mandarin-chinese-monolingual-term-dictionaries)

## Japanese

### Japanese Frequency Dictionaries

<!-- prettier-ignore -->
| Title | Entry Count | Information |
| ------ | ----------- | ----------- |
| Wikipedia | 853593 | **Author**: Thermospore <br /> **Revision**: frequency_v2 <br /> **URL**: https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/Japanese2015_10000 <br /> **Description**:<br /> v0.1: Only change is the shortened title + addition of metadata<br />v1: Reserved version; never completed<br />v2: Moved to a much larger dataset. List goes up to about 850k now... <br /> |
| BCCWJ-LUW | 824594 | **Author**: toasted-nutbread <br /> **Revision**: 1 <br /> **URL**: https://github.com/toasted-nutbread/yomichan-bccwj-frequency-dictionary <br /> **Attribution**: Copyright National Institute for Japanese Language and Linguistics<br /><br />https://pj.ninjal.ac.jp/corpus_center/bccwj/en/freq-list.html <br /> **Description**:<br /> Long unit word frequencies from the Balanced Corpus of Contemporary Written Japanese (BCCWJ). <br /> |
| JPDB | 515231 | **Author**: jpdb, Marv <br /> **Revision**: JPDB_by-frequency-global_2022-05-10T03:27:02.930Z <br /> **URL**: https://jpdb.io <br /> **Description**:<br /> Generated via userscript: https://github.com/MarvNC/jpdb-freq-list<br />    ㋕ is used to indicate a frequency for a hiragana reading.<br />    ❌ is used to indicate that a term does not appear in the JPDB corpus. <br /> |
| Innocent Ranked | 280000 | **Revision**: frequency1 <br /> |
| Novels | 269987 | **Revision**: yyyy <br /> |
| jpDicts (206k) | 206621 | **Revision**: frequency_jpDicts <br /> **Description**:<br /> Frequency list made from Japanese dictionary (ハイブリッド新辞林 v2, 故事ことわざの辞典, 漢字源, 精選版 日本国語大辞典, 新明解四字熟語辞典, 学研 四字熟語辞典, 実用日本語表現辞典,, 旺文社国語辞典 第十一版 画像無し, 大辞林 第三版, デジタル大辞泉, 岩波国語辞典 第六版, 広辞苑 第六版) <br /> |
| Youtube | 187053 | **Revision**: frequency3 <br /> |
| 青空文庫熟語 | 169623 | **Author**: vtrm, Marv <br /> **Revision**: aozoraBunko_2022-08-26T05:50:26.124Z <br /> **URL**: https://www.aozora.gr.jp <br /> **Attribution**: 青空文庫 <br /> **Description**:<br /> Rank-based jukugo frequencies made from Aozora Bunko<br />Data from https://vtrm.net/japanese/kanji-jukugo-frequency/en<br />Created with https://github.com/MarvNC/yomichan-dictionaries<br />Caveats:<br />Jukugo which are absent from the dictionary entries are not reported in the data since the software has no way of knowing whether it encountered a legitimate jukugo or merely a juxtaposition of several words (e.g. when two or more nouns are combined together to form a new noun, or when a jukugo is used as an adverb).<br /><br />Sometimes a compound word can be either a Sino-Japanese jukugo read in on’yomi, or a native Japanese word read in kun’yomi and sometimes accompanied with okurigana. For example, 蹌踉 can either be a taru-adjective or to-adverb of Chinese origin read そうろう, or the root of a Japanese verb whose dictionary form is 蹌踉めく and which is read よろめく. Keep in mind that the program I wrote doesn’t parse kana and doesn’t try to disambiguate kanji readings. Consequently, occurrences of 蹌踉 read そうろう and 蹌踉 read よろ aren’t distinguished and are grouped together in the statistics. So if you look at the data for kanji 蹌, the line corresponding to 蹌踉 refers to all occurrences of 蹌踉 in the corpus, whatever their respective readings is.<br /><br />Due to the parsing method used and to the imperfect nature of Chinese characters word segmentation algorithms, there is a small (negligible but non-zero) number of false positives and missed out words. <br /> |
| CC100 | 160836 | **Author**: xydustc <br /> **Revision**: 1 <br /> **Description**:<br /> Sudachipy Mode B & fugashi parsed CC100 datasaet, filtered by dictionaries <br /> |
| 国語辞典 | 156452 | **Revision**: kokugojiten_freq <br /> |
| Netflix | 129141 | **Revision**: netflix.frequency <br /> |
| Anime & J-drama | 99999 | **Revision**: anime.frequency <br /> |
| VNs Freq | 85374 | **Revision**: frequency2019 <br /> |
| Narou Freq | 49269 | **Revision**: frequency1 <br /> |
| VN Freq | 35058 | **Revision**: frequency1 <br /> |
| Conversation Corpus | 29528 | **Revision**: CEJC_ver202209_2023-06-22T11:04:44.335323+00:00 <br /> **URL**: https://www2.ninjal.ac.jp/conversation/cejc/cejc-wc.html <br /> **Description**:<br /> Converted programmatically from the dataset. See repo at https://github.com/forsakeninfinity/CEJC_yomichan_freq_dict <br /> |

### Japanese Bilingual Dictionaries

<!-- prettier-ignore -->
| Title | Entry Count | Information |
| ------ | ----------- | ----------- |
| Jitendex [2023-12-12] | 290488 | **Author**: stephenmk <br /> **Revision**: 3.1 <br /> **URL**: jitendex.org <br /> **Attribution**: © CC BY-SA 4.0 Stephen Kraus 2023<br /><br />You are free to use, modify, and redistribute Jitendex files under the terms of the Creative Commons Attribution-ShareAlike License (V4.0)<br /><br />Jitendex includes material from several copyrighted sources in compliance with the terms and conditions of those projects.<br /><br />• JMdict (EDICT, etc.) dictionary data is provided by the Electronic Dictionaries Research Group. Visit edrdg.org for more information.<br />• Example sentences (Japanese and English) are provided by Tatoeba (https://tatoeba.org/). This data is licensed CC BY 2.0 FR.<br />• Positional information for the furigana displayed in headwords is provided by the JmdictFurigana project. This data is distributed under a Creative Commons Attribution-ShareAlike License. <br /> |
| 新和英 | 152202 | **Revision**: Shinwaei1 <br /> |
| NEW斎藤和英大辞典 | 47504 | **Revision**: saitoje.2023.03.26.1 <br /> **Description**:<br /> Tip: use custom CSS to control how many example sentences are displayed<br /><br />[data-dictionary="NEW斎藤和英大辞典"] ul.gloss-sc-ul>li:nth-child(n+5) {<br />  display: none;<br />} <br /> |

### Japanese Grammar Dictionaries

<!-- prettier-ignore -->
| Title | Entry Count | Information |
| ------ | ----------- | ----------- |
| 毎日のんびり日本語教師 | 1479 | **Author**: nihongobongo <br /> **Revision**: nihongo_no_sensei_v_1.03 ;2022-04-30;embedded urls, p of speech indicators(N5-N0) <br /> **URL**: https://nihongonosensei.net/?page_id=10246 <br /> **Attribution**: nihongo_no_sensei <br /> **Description**:<br /> term bank 1 contains N1, bank 2 N2, etc...中国の大学で日本語教師をしています。日本語教育能力検定試験の解説、対策講座、中国での生活や授業、日本語の文法の説明をしています。 <br /> |
| 絵でわかる日本語 | 1248 | **Author**: nihongobongo <br /> **Revision**: edewakaru_v1.03; 2022-09-01 <br /> **URL**: https://github.com/aiko-tanaka/Grammar-Dictionaries/ <br /> **Attribution**: https://www.edewakaru.com/archives/cat_179055.html <br /> **Description**:<br /> 日本語文法・自動詞他動詞・口語形・間違えやすい日本語・擬音語・擬態語などを「絵」で説明します。日本語を勉強している人のためのブログです. <br /> |
| どんなときどう使う 日本語表現文型辞典 | 1082 | **Author**: nihongobongo <br /> **Revision**: donna_v1.04;2022-04-30(completed arrow internal links) <br /> **URL**: https://itazuraneko.neocities.org/grammar/donnatoki.html <br /> **Attribution**: itazuraneko <br /> **Description**:<br /> A well regarded grammar reference covering grammar points through N5 to N1 of the 日本語能力試験. <br /> |
| JLPT文法解説まとめ | 628 | **Author**: nihongobongo <br /> **Revision**: nihongo_kyoshi_v1.03; 2022-05-27; p.o.s. info <br /> **URL**: https://nihongokyoshi-net.com/jlpt-grammars/ <br /> **Attribution**: 日本語NET <br /> **Description**:<br /> このページでは、JLPTに登場する文型を紹介しています。JLPTのレベル毎に５０音順で並べています。<br /><br /> how to use:https://github.com/aiko-tanaka/Grammar-Dictionaries/ <br /> |
| 日本語文法辞典(全集) | 535 | **Author**: nihongobongo <br /> **Revision**: DOJG_v1.01;2022-04-30;better formatting <br /> **Attribution**: DOJG <br /> **Description**:<br /> DOJG-allVols <br /> |

### Japanese Kanji Frequency Dictionaries

<!-- prettier-ignore -->
| Title | Entry Count | Information |
| ------ | ----------- | ----------- |
| Wikipedia Kanji | 20932 | **Author**: scriptin, Marv <br /> **Revision**: kanjiFrequency1 <br /> **URL**: https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8 <br /> **Attribution**: JA Wikipedia <br /> **Description**:<br /> Rank-based kanji frequency data from a May 2015 dump of Japanese Wikipedia.<br />Data from https://github.com/scriptin/kanji-frequency<br />Modified by https://github.com/MarvNC/yomichan-dictionaries <br /> |
| 青空文庫漢字 | 8488 | **Author**: vtrm, Marv <br /> **Revision**: aozoraBunko_2022-08-26T05:49:00.968Z <br /> **URL**: https://www.aozora.gr.jp/ <br /> **Attribution**: 青空文庫 <br /> **Description**:<br /> Rank-based kanji frequency data from the Aozora Bunko<br />Data from https://vtrm.net/japanese/kanji-jukugo-frequency/en<br />Created with https://github.com/MarvNC/yomichan-dictionaries <br /> |
| JPDB Kanji Freq | 6494 | **Author**: jpdb, Marv <br /> **Revision**: jpdb_kanji_2022-08-26T22:38:10.913Z <br /> **URL**: https://jpdb.io <br /> **Attribution**: jpdb <br /> **Description**:<br /> Rank-based kanji frequency data from JPDB<br />Created with https://github.com/MarvNC/yomichan-dictionaries <br /> |
| Innocent Corpus Kanji | 6430 | **Author**: cb4960, Marv <br /> **Revision**: kanjiFrequency1 <br /> **URL**: https://web.archive.org/web/20190309073023/https://forum.koohii.com/thread-9459.html#pid168613 <br /> **Attribution**: Innocent Corpus Novels <br /> **Description**:<br /> Rank-based kanji frequency data from the innocent corpus<br />Modified by https://github.com/MarvNC/yomichan-dictionaries <br /> |

### Japanese Kanji Dictionaries

<!-- prettier-ignore -->
| Title | Entry Count | Information |
| ------ | ----------- | ----------- |
| 漢字林 | 46210 | **Revision**: 漢字林 <br /> |
| 漢字辞典オンライン | 27693 | **Revision**: jitenon-kanji;2023-08-17 <br /> **URL**: https://kanji.jitenon.jp/ <br /> **Attribution**: © 2014-2023  漢字辞典オンライン <br /> |
| Wiktionary漢字 | 18122 | **Author**: Wiktionary, Wikimedia Foundation, Marv <br /> **Revision**: Wiktionary漢字 2022-09-11T06:04:07.166Z <br /> **URL**: https://ja.wiktionary.org/wiki/%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AA:%E6%BC%A2%E5%AD%97 <br /> **Attribution**: JA Wiktionary <br /> **Description**:<br /> Kanji data from ja.wiktionary.org.<br />Parsed/converted by https://github.com/MarvNC/yomichan-dictionaries <br /> |
| KANJIDIC | 10383 | **Author**: yomitan-import <br /> **Revision**: kanjidic2 <br /> **URL**: https://github.com/themoeway/yomitan-import <br /> **Attribution**: This publication has included material from the JMdict (EDICT, etc.) dictionary files in accordance with the licence provisions of the Electronic Dictionaries Research Group. See http://www.edrdg.org/ <br /> |
| TheKanjiMap Kanji Radicals/Composition | 6911 | **Author**: thekanjimap, Marv <br /> **Revision**: thekanjimap_2023-02-04T03:44:35.926Z <br /> **URL**: https://thekanjimap.com <br /> **Attribution**: thekanjimap <br /> **Description**:<br /> Radical entries and kanji decomposition/compositions from thekanjimap.com.<br />  Created with https://github.com/MarvNC/yomichan-dictionaries <br /> |
| JPDB Kanji | 6494 | **Author**: jpdb, Marv <br /> **Revision**: jpdb_kanji_2022-08-26T22:38:14.736Z <br /> **URL**: https://jpdb.io <br /> **Attribution**: jpdb <br /> **Description**:<br /> Kanji data from JPDB<br />Created with https://github.com/MarvNC/yomichan-dictionaries <br /> |
| 漢字ペディア | 5635 | **Revision**: 漢字ペディア <br /> |
| mozc Kanji Variants | 1317 | **Author**: Google, Marv <br /> **Revision**: mozc_2022-08-26T22:38:27.927Z <br /> **URL**: https://github.com/google/mozc <br /> **Attribution**: Google <br /> **Description**:<br /> Data about kanji variants from Google's Japanese IME, mozc.<br />Created with https://github.com/MarvNC/yomichan-dictionaries <br /> |
| jitai | 1174 | **Author**: epistularum, Marv <br /> **Revision**: jitai_2022-08-26T22:37:55.378Z <br /> **URL**: https://github.com/epistularum/jitai <br /> **Description**:<br /> Data about 新字体/旧字体 and 標準字体/許容字体 in comparison to each other.<br />Created with https://github.com/MarvNC/yomichan-dictionaries <br /> |

### Japanese Monolingual Dictionaries

<!-- prettier-ignore -->
| Title | Entry Count | Information |
| ------ | ----------- | ----------- |
| JA Wikipedia [2022-12-01] | 1279999 | **Author**: Wikipedians, DBPedia, Marv <br /> **Revision**: wikipedia_2023-12-17T22:34:35.417Z <br /> **URL**: https://ja.wikipedia.org/ <br /> **Attribution**: Wikipedia <br /> **Description**:<br /> Wikipedia short abstracts from the DBPedia dataset available at https://databus.dbpedia.org/dbpedia/text/short-abstracts.<br /><br />Recommended custom CSS:<br />div.gloss-sc-div[data-sc-jawiki=red] {<br />  color: #e5007f;<br />}<br /><br />Created with https://github.com/MarvNC/yomichan-dictionaries <br /> |
| JMnedict | 666086 | **Author**: yomitan-import <br /> **Revision**: JMnedict.2023-12-17 <br /> **URL**: https://github.com/themoeway/yomitan-import <br /> **Attribution**: This publication has included material from the JMdict (EDICT, etc.) dictionary files in accordance with the licence provisions of the Electronic Dictionaries Research Group. See http://www.edrdg.org/ <br /> |
| Pixiv [2023-11-24] | 531855 | **Author**: Pixiv contributors, Marv <br /> **Revision**: pixiv_2023-11-24T00:31:55.205Z <br /> **URL**: https://dic.pixiv.net/ <br /> **Attribution**: Pixiv <br /> **Description**:<br /> Article summaries scraped from pixiv, 531859 entries included.<br />Created with https://github.com/MarvNC/yomichan-dictionaries <br /> |
| デジタル大辞泉 | 527290 | **Author**: ッツ <br /> **Revision**: daijisen_20210506;2021-07-27 <br /> **URL**: https://dictionary.goo.ne.jp <br /> **Attribution**: 監修：松村明<br />編集委員：池上秋彦、金田弘、杉崎一雄、鈴木丹士郎、中嶋尚、林巨樹、飛田良文<br />編集協力：田中牧郎、曽根脩<br /><br />© Shogakukan Inc.<br />https://daijisen.jp <br /> **Description**:<br /> 30万4千項目以上（2021年04月現在）を収録、言葉の集大成といえる大型国語辞典。年3回。定期更新を行い、最新の項目と日々修正される最新のデータを提供しています。 <br /> |
| 大辞林　第四版 | 334751 | **Revision**: daijirin2;2023-07-10 <br /> **Attribution**: © Sanseido Co., LTD. 2019 <br /> |
| 精選版　日本国語大辞典 | 286365 | **Revision**: seisenban3 <br /> |
| 広辞苑 第七版 | 257602 | **Author**: shoui520 & Thermospore <br /> **Revision**: 3 <br /> **URL**: https://github.com/Thermospore/koj72yomi <br /> **Attribution**: http://kojien.iwanami.co.jp/ <br /> **Description**:<br /> If you find any bugs or things to be improved, don't hesitate to post an issue on the github repo!<br /><br />--- rev.BETA1 ---<br />・Initial testing release<br /><br />--- rev.BETA2 ---<br />・Minor gaiji and PoS adjustments<br />・Added PoS for phrases (ex ○席末を汚す)<br />・Extracted readings for ALPH entries (ex 5W1H or DoS)<br />・Cleaned out some empty quotes in the structured content<br />・Stripped out loan source words (ex "class" being listed as kanji for クラス)<br /><br />--- rev.1 ---<br />・Initial public release<br />・Minor adjustment to loan source stripping<br />・Fixed some errors in the gaiji map<br /><br />--- rev.2 ---<br />・Add support for 圏点 (ex in くつ‐かぶり 【沓冠】)<br />・Some disambiguation info is now extracted (ex you can now see（音節）and（感動詞）in the entries for "あ")<br />・Use structured content for <br> instead of \n<br />・Add margins to make hierarchical entries more readable, and adjust icons to suit (ex つう・ずる 【通ずる】)<br />・The alph icon is now supported (ex W-VHS)<br />・Removed the "oyko_link" section, as it was redundant (details/discussion: https://github.com/FooSoft/yomichan/issues/1910 )<br /><br />--- rev.3 ---<br />・All photos, diagrams, and mathematical figures are now supported! (see せいき‐きょくせん 【正規曲線】for an example of the math figs)<br />・Add tooltips to see the path + filename of gaiji/images<br />・Expand and improve gaiji mapping (thanks epistularum)<br />・Use relative font-size instead of absolute for sub/superscript (thanks stephenmk)<br /><br />--- Upcoming (maybe...) ---<br />・Detect kanji forms mentioned in the body of the entry (ex「波乱」とも書く in は‐らん 【波瀾】)<br />・Functional xrefs? ( https://github.com/FooSoft/yomichan/pull/2089 )<br />・Further expand gaiji map<br />・etc absurdly obscure/minor formatting improvements <br /> |
| ハイブリッド新辞林 | 140879 | **Revision**: shinjirin <br /> |
| 新選国語辞典　第十版 | 127191 | **Revision**: shinsenkoku10;2023-08-07 <br /> **URL**: https://www.shogakukan.co.jp/books/09501409 <br /> **Attribution**: © Shogakukan Inc. 2022 <br /> **Description**:<br /> Add custom CSS for enhanced formatting<br /><br />li[data-dictionary^='新選国語辞典'] th,<br />span[data-sc-shinsenkoku10='warichu'] {<br />white-space: nowrap;<br />}<br />span[data-sc-shinsenkoku10='red'] {<br />color: #e5007f;<br />} <br /> |
| 新明解国語辞典　第八版 | 100593 | **Revision**: smk8;2023-07-09 <br /> **Attribution**: © Sanseido Co., LTD. 2020 <br /> |
| 三省堂国語辞典　第八版 | 93091 | **Revision**: sankoku8;2023-07-19 <br /> **Attribution**: © Sanseido Co., LTD. 2021 <br /> |
| 旺文社国語辞典 第十一版 | 92217 | **Author**: irhello, shoui <br /> **Revision**: OUKOKU11_1.6 <br /> **URL**: https://learnjapanese.moe <br /> **Attribution**: Ⓒ 2013 旺文社 株式会社 <br /> https://www.obunsha.co.jp/pr/oukoku/ <br /> **Description**:<br /> <================================<br />的確さ、わかりやすさを追求！<br />王道の国語辞典をYomichanで検索！<br /><================================ <br /> |
| 岩波国語辞典　第八版 | 76625 | **Revision**: iwakoku8.2023.04.08.0 <br /> |
| KO字源 | 73401 | **Revision**: KO字源 <br /> |
| 明鏡国語辞典　第二版 | 73068 | **Revision**: meikyo2.2023.07.22.0 <br /> **Description**:<br /> ▼ non-jōyō kanji<br />▽ jōyō kanji used with a non-standard reading <br /> |
| 全訳漢辞海 | 60839 | **Revision**: 全訳漢辞海 <br /> |
| 実用日本語表現辞典 | 55379 | **Revision**: jitsuyou;2023-08-15 <br /> **URL**: http://www.practical-japanese.com/ <br /> **Description**:<br /> Added conjugation <br /> |
| 漢字源 | 48085 | **Revision**: kanjigen1 <br /> |
| weblio古語辞典 | 47958 | **Revision**: Meikyou1 <br /> |
| 国語辞典オンライン | 44970 | **Revision**: jitenon-kokugo;2023-05-13 <br /> **URL**: https://kokugo.jitenon.jp/ <br /> **Attribution**: © 2014-2023  国語辞典オンライン <br /> |
| 漢検 漢字辞典 | 40549 | **Revision**: ;_; <br /> |
| 新語時事用語辞典 | 18294 | **Revision**: shingojijiyougojiten;2023-08-14 <br /> **URL**: http://www.breaking-news-words.com/ <br /> **Description**:<br /> 新聞やテレビで話題に上った、新語および時事的なキーワードを解説しています。 Added conjugation <br /> |
| 使い方の分かる 類語例解辞典 | 17350 | **Author**: 小学館辞典編集部 <br /> **Revision**: tsukaikatanowakaru-2023-08-09 <br /> **URL**: https://dictionary.goo.ne.jp/thsrs/ <br /> **Attribution**: 使い方の分かる 類語例解辞典 <br /> **Description**:<br /> Scraped from dictionary.goo.ne.jp 2023-08-09 <br /> |
| 故事ことわざの辞典 | 15577 | **Author**: Thermospore <br /> **Revision**: kotowaza1 <br /> **Description**:<br /> Generated using the current version of Yomichan Import as of March 7th, 2021, then hex edited to remove excessive whitespace <br /> |
| 故事・ことわざ・慣用句オンライン | 8513 | **Revision**: jitenon-kotowaza;2023-05-15 <br /> **URL**: https://kotowaza.jitenon.jp/ <br /> **Attribution**: © 2014-2023  故事・ことわざ・慣用句辞典オンライン <br /> |
| 四字熟語辞典オンライン | 7782 | **Revision**: jitenon-yoji;2023-05-14 <br /> **URL**: https://yoji.jitenon.jp/ <br /> **Attribution**: © 2012-2023  四字熟語辞典オンライン <br /> |
| 学研 四字熟語辞典 | 5484 | **Author**: ッツ <br /> **Revision**: gakken_yojijukugo;2021-07-12 <br /> **URL**: https://dictionary.goo.ne.jp <br /> **Attribution**: 編集：学研<br /><br />© Gakken<br />https://hon.gakken.jp <br /> **Description**:<br /> 難解な四字熟語も理解できるように、また、手軽に調べられるように、四字熟語を広く捉え約2700項目を収録。文学作品の用例が豊富で、注記や類義語、対義語も充実。検定試験やクロスワードにも使えます。 <br /> |
| 日本語俗語辞書 | 4354 | **Author**: Kartoffel <br /> **Revision**: 1 <br /> **Attribution**: http://zokugo-dict.com/ <br /> **Description**:<br /> I'll only say anything in the presence of my advocate <br /> |
| 新明解四字熟語辞典 | 4194 | **Author**: ッツ <br /> **Revision**: shinmeikai_yojijukugo;2021-07-12 <br /> **URL**: https://dictionary.goo.ne.jp <br /> **Attribution**: 編集：三省堂<br /><br />© SANSEIDO Co.<br />https://dictionary.sanseido-publ.co.jp <br /> **Description**:<br /> 業界最大語数を誇る「新明解四字熟語辞典」より厳選。座右の銘や新年の抱負に使える四字熟語約2000項目を収録しています。就活のエントリーシートやスピーチなど、日常生活のさまざまな場面で役立ちます。 <br /> |
| YOJI-JUKUGO | 4017 | **Revision**: YOJI-JUKUGO <br /> |
| 全国方言辞典 | 3738 | **Author**: goo <br /> **Revision**: zenkokuhougenjiten-2023-08-12 <br /> **URL**: https://dictionary.goo.ne.jp/dialect/ <br /> **Attribution**: 全国方言辞典 <br /> **Description**:<br /> Scraped from dictionary.goo.ne.jp 2023-08-12 <br /> |
| 語源由来辞典 | 2795 | **Revision**: Gogen <br /> |
| 福日木健二字熟語 | 2306 | **Revision**: 福日木健二字熟語 <br /> |
| surasura 擬声語 | 1422 | **Author**: surasura, Marv <br /> **Revision**: surasura_2023-03-22T01:10:57.302Z <br /> **URL**: http://sura-sura.com/ <br /> **Attribution**: surasura <br /> **Description**:<br /> Onomatopoeia info from http://sura-sura.com/<br />Parsed/converted by https://github.com/MarvNC/yomichan-dictionaries <br /> |
| 漢字ペディア同訓異義 | 966 | **Revision**: kanjipedia-doukunigi;2023-08-28 <br /> **URL**: https://www.kanjipedia.jp/sakuin/doukunigi/ <br /> **Attribution**: © 公益財団法人 日本漢字能力検定協会 <br /> **Description**:<br /> Scraped from kanjipedia 2023-08-28 <br /> |
| 複合語起源 | 222 | **Author**: 名無し, 名無し, seanblue, Marv <br /> **Revision**: 複合語起源_2022-08-26T22:38:51.046Z <br /> **URL**: https://github.com/MarvNC/yomichan-dictionaries <br /> **Description**:<br /> Sources:<br />https://jbbs.shitaraba.net/bbs/read.cgi/study/10958/1299762655<br />https://academy6.5ch.net/test/read.cgi/gengo/1228873581<br />https://community.wanikani.com/t/special-kanji-words-derived-from-other-words/35655<br /><br />Created with https://github.com/MarvNC/yomichan-dictionaries <br /> |

### Japanese Pitch Accent Dictionaries

<!-- prettier-ignore -->
| Title | Entry Count | Information |
| ------ | ----------- | ----------- |
| 大辞林第四版 | 152193 | **Author**: コツ <br /> **Revision**: pitch_1.0.1.1 <br /> **URL**: https://kotu.io <br /> **Description**:<br /> For accurate pronunciation (vowel elongation etc..) and comparisons across multiple modern and historical dictionaries visit the linked URL. <br /> |
| 大辞泉 | 88089 | **Author**: コツ <br /> **Revision**: pitch_1.0.0.1 <br /> **URL**: https://kotu.io <br /> **Description**:<br /> For accurate pronunciation (vowel elongation etc..) and comparisons across multiple modern and historical dictionaries visit the linked URL. <br /> |
| 三省堂国語辞典第八番 | 77630 | **Author**: コツ <br /> **Revision**: pitch_1.0.1.1 <br /> **URL**: https://kotu.io <br /> **Description**:<br /> For accurate pronunciation (vowel elongation etc..) and comparisons across multiple modern and historical dictionaries visit the linked URL. <br /> |
| 新明解第八版 | 75978 | **Author**: コツ <br /> **Revision**: pitch_1.0.2.1 <br /> **URL**: https://kotu.io <br /> **Description**:<br /> For accurate pronunciation (vowel elongation etc..) and comparisons across multiple modern and historical dictionaries visit the linked URL. <br /> |
| NHK | 73100 | **Author**: コツ <br /> **Revision**: pitch_1.0.1.1 <br /> **URL**: https://kotu.io <br /> **Description**:<br /> For accurate pronunciation (vowel elongation etc..) and comparisons across multiple modern and historical dictionaries visit the linked URL. <br /> |

## Cantonese Dictionaries

### Cantonese Term Dictionaries

<!-- prettier-ignore -->
| Title | Entry Count | Information |
| ------ | ----------- | ----------- |
| CE Wiktionary | 142685 | **Revision**: 20240412 <br /> |
| Canto CEDICT | 105347 | **Revision**: 20240412 <br /> |
| CantoDict | 86570 | **Author**: CantoDict contributors, Marv <br /> **Revision**: cantodict_2023-04-25T22:55:55.715Z <br /> **URL**: http://www.cantonese.sheik.co.uk/ <br /> **Attribution**: CantoDict contributors <br /> **Description**:<br /> CantoDict was a Cantonese-English dictionary created and maintained by public contributors. It was abandoned, but the data was archived thanks to awong-dev at https://github.com/awong-dev/cantodict-archive.<br />Created with https://github.com/MarvNC/yomichan-dictionaries <br /> |
| Words.hk C-E FS | 50064 | **Revision**: 20240412 <br /> |
| Words.hk C-C FS | 50061 | **Revision**: 20240412 <br /> |
| CC-Canto | 34335 | **Revision**: 20240412 <br /> |

### Cantonese Term Frequency Dictionaries

<!-- prettier-ignore -->
| Title | Entry Count | Information |
| ------ | ----------- | ----------- |
| Cifu Spoken | 51798 | **Author**: Regine Lai, Grégoire Winterstein, Marv <br /> **Revision**: 2023-12-21 <br /> **URL**: https://github.com/MarvNC/yomichan-dictionaries <br /> **Attribution**: Lai, Regine and Winterstein, Grégoire (2020) "Cifu: a Frequency Lexicon of Hong Kong Cantonese", in Proceedings of The 12th Language Resources and Evaluation Conference, Marseille: European Language Resources Association, p. 3062--3070. <br /> **Description**:<br /> Cantonese Frequency List from Cifu:<br />https://github.com/gwinterstein/Cifu<br /><br />Spoken data from HKCanCor (Luke and Wong, 2015), HKCAC (Leung and Law, 2001), CantoMap (Lai and Winterstein, 2019)<br />Converted by Marv <br /> |
| Cifu Written | 51798 | **Author**: Regine Lai, Grégoire Winterstein, Marv <br /> **Revision**: 2023-12-21 <br /> **URL**: https://github.com/MarvNC/yomichan-dictionaries <br /> **Attribution**: Lai, Regine and Winterstein, Grégoire (2020) "Cifu: a Frequency Lexicon of Hong Kong Cantonese", in Proceedings of The 12th Language Resources and Evaluation Conference, Marseille: European Language Resources Association, p. 3062--3070. <br /> **Description**:<br /> Cantonese Frequency List from Cifu:<br />https://github.com/gwinterstein/Cifu<br /><br />Written data from 3,841 chapters of amateur novels from the website https://www.shikoto.com/<br />Converted by Marv <br /> |

## Mandarin Chinese

### Mandarin Chinese Frequency Dictionaries

<!-- prettier-ignore -->
| Title | Entry Count | Information |
| ------ | ----------- | ----------- |
| BLCUmixed | 98089 | **Author**: Beijing Language and Culture University compiled the data, BearXiong converted it for Pleco, nadavspi and Michel converted it for yomichan <br /> **Revision**: zhfreq_mixed_2023-06-20 <br /> **URL**: https://www.chinese-forums.com/forums/topic/56816-sharing-a-pleco-word-frequency-user-dictionary/ <br /> **Attribution**: Beijing Language and Culture University <br /> **Description**:<br /> This frequency list is taken from BearXiong's post on chinese-forums.com. The data itself comes from the 15 billion character corpus compiled by the Beijing Language and Culture university. <br /> |
| BLCUsci | 92779 | **Author**: Beijing Language and Culture University compiled the data, BearXiong converted it for Pleco, nadavspi and Michel converted it for yomichan <br /> **Revision**: zhfreq_sci_2023-06-20 <br /> **URL**: https://www.chinese-forums.com/forums/topic/56816-sharing-a-pleco-word-frequency-user-dictionary/ <br /> **Attribution**: Beijing Language and Culture University <br /> **Description**:<br /> This frequency list is taken from BearXiong's post on chinese-forums.com. The data itself comes from the 15 billion character corpus compiled by the Beijing Language and Culture university. <br /> |
| BLCUcoll | 91797 | **Author**: Beijing Language and Culture University compiled the data, BearXiong converted it for Pleco, nadavspi and Michel converted it for yomichan <br /> **Revision**: zhfreq_coll_2023-06-20 <br /> **URL**: https://www.chinese-forums.com/forums/topic/56816-sharing-a-pleco-word-frequency-user-dictionary/ <br /> **Attribution**: Beijing Language and Culture University <br /> **Description**:<br /> This frequency list is taken from BearXiong's post on chinese-forums.com. The data itself comes from the 15 billion character corpus compiled by the Beijing Language and Culture university. <br /> |
| BLCUnews | 91690 | **Author**: Beijing Language and Culture University compiled the data, BearXiong converted it for Pleco, nadavspi and Michel converted it for yomichan <br /> **Revision**: zhfreq_news_2023-06-20 <br /> **URL**: https://www.chinese-forums.com/forums/topic/56816-sharing-a-pleco-word-frequency-user-dictionary/ <br /> **Attribution**: Beijing Language and Culture University <br /> **Description**:<br /> This frequency list is taken from BearXiong's post on chinese-forums.com. The data itself comes from the 15 billion character corpus compiled by the Beijing Language and Culture university. <br /> |
| BLCUlit | 90580 | **Author**: Beijing Language and Culture University compiled the data, BearXiong converted it for Pleco, nadavspi and Michel converted it for yomichan <br /> **Revision**: zhfreq_lit_2023-06-20 <br /> **URL**: https://www.chinese-forums.com/forums/topic/56816-sharing-a-pleco-word-frequency-user-dictionary/ <br /> **Attribution**: Beijing Language and Culture University <br /> **Description**:<br /> This frequency list is taken from BearXiong's post on chinese-forums.com. The data itself comes from the 15 billion character corpus compiled by the Beijing Language and Culture university. <br /> |
| SUBTLEX-CH | 62096 | **Author**: University of Ghent compiled the data, BearXiong converted it for Pleco, nadavspi and Michel converted it for yomichan <br /> **Revision**: zhfreq_subs_2023-06-20 <br /> **URL**: https://www.chinese-forums.com/forums/topic/56816-sharing-a-pleco-word-frequency-user-dictionary/ <br /> **Attribution**: University of Ghent <br /> **Description**:<br /> This frequency list is taken from BearXiong's post on chinese-forums.com. The subtitles category is based on SUBTLEX, a frequency list compiled by the university of Ghent, Belgium. <br /> |
| HSK | 11107 | **Author**: Chinese Ministry of Education, Andy Burke, Michel <br /> **Revision**: HSK_2023-06-20 <br /> **URL**: https://github.com/andycburke/HSK-3.0-Word-List <br /> **Attribution**: Chinese Ministry of Education <br /> **Description**:<br /> This frequency list is based on the new HSK word list (HSK 3.0, 2021). It is taken from Andy Burke's github post, which is itself taken from the Chinese Ministry of Education's original pdf. Levels 7 to 9 are not delineated <br /> |

### Mandarin Chinese Hanzi Dictionaries

<!-- prettier-ignore -->
| Title | Entry Count | Information |
| ------ | ----------- | ----------- |
| ZH Wiktionary Hanzi | 97641 | **Author**: Wiktionary, Wikimedia Foundation, Marv <br /> **Revision**: ZH_Wikt_Hanzi2023-03-05T21:01:41.039Z <br /> **URL**: https://zh.wiktionary.org/wiki/Category:%E6%BC%A2%E5%AD%97%E5%AD%97%E5%85%83 <br /> **Attribution**: ZH Wiktionary <br /> **Description**:<br /> Hanzi data scraped from zh.wiktionary.org<br />Parsed/converted by https://github.com/MarvNC/yomichan-dictionaries <br /> |
| 康熙字典 | 46836 | **Revision**: 康熙字典 <br /> |
| CC-CEDICT Hanzi [2023-12-20] | 17740 | **Author**: MDBG, CC-CEDICT, Marv <br /> **Revision**: 2023-12-20 <br /> **URL**: https://github.com/MarvNC/cc-cedict-yomitan <br /> **Attribution**: https://cc-cedict.org/wiki/<br />Thanks go out to everyone who submitted new words or corrections. Special thanks go out to the CC-CEDICT editor team, who spend many hours doing research to maintain a high quality level:<br /><br />goldyn_chyld - Matic Kavcic<br />richwarm - Richard Warmington<br />vermillion - Julien Baley<br />ycandau - Yves Candau<br />feilipu<br />and the editors who wish to remain anonymous<br />Special thanks to:<br /><br />Craig Brelsford, for his extensive list of bird names<br />Erik Peterson, for his work as the editor of CEDICT<br />Paul Andrew Denisowski, the original creator of CEDICT <br /> **Description**:<br /> CC-CEDICT is a continuation of the CEDICT project started by Paul Denisowski in 1997 with the aim to provide a complete downloadable Chinese to English dictionary with pronunciation in pinyin for the Chinese characters.<br />    This dictionary for Yomitan was converted from the data available at https://www.mdbg.net/chinese/dictionary?page=cc-cedict using https://github.com/MarvNC/cc-cedict-yomitan and https://github.com/MarvNC/yomichan-dict-builder. <br /> |

### Mandarin Chinese Bilingual Term Dictionaries

<!-- prettier-ignore -->
| Title | Entry Count | Information |
| ------ | ----------- | ----------- |
| Wenlin ABC | 207289 | **Author**: Wenlin Institute, rduwjjnh <br /> **Revision**: 2023-07-17 <br /> **URL**: https://wenlin.co/wow/Project:Ci <br /> **Attribution**: Wenlin Institute <br /> **Description**:<br /> Published in July 2003 and revised through 2005, the Wenlin ABC Chinese-English Comprehensive Dictionary was produced by the Wenlin Institude in cooperation with the ABC Chinese Dictionary Series Project at the University of Hawaii. It contains over 196,000 entries. <br /> |
| CC-CEDICT [2023-12-20] | 198702 | **Author**: MDBG, CC-CEDICT, Marv <br /> **Revision**: 2023-12-20 <br /> **URL**: https://github.com/MarvNC/cc-cedict-yomitan <br /> **Attribution**: https://cc-cedict.org/wiki/<br />Thanks go out to everyone who submitted new words or corrections. Special thanks go out to the CC-CEDICT editor team, who spend many hours doing research to maintain a high quality level:<br /><br />goldyn_chyld - Matic Kavcic<br />richwarm - Richard Warmington<br />vermillion - Julien Baley<br />ycandau - Yves Candau<br />feilipu<br />and the editors who wish to remain anonymous<br />Special thanks to:<br /><br />Craig Brelsford, for his extensive list of bird names<br />Erik Peterson, for his work as the editor of CEDICT<br />Paul Andrew Denisowski, the original creator of CEDICT <br /> **Description**:<br /> CC-CEDICT is a continuation of the CEDICT project started by Paul Denisowski in 1997 with the aim to provide a complete downloadable Chinese to English dictionary with pronunciation in pinyin for the Chinese characters.<br />    This dictionary for Yomitan was converted from the data available at https://www.mdbg.net/chinese/dictionary?page=cc-cedict using https://github.com/MarvNC/cc-cedict-yomitan and https://github.com/MarvNC/yomichan-dict-builder. <br /> |
| CEDICT | 193931 | **Revision**: cc_cedict_14_3_2021 <br /> |
| 中日大辞典　第二版 | 146381 | **Revision**: chuunichi1 <br /> |

### Mandarin Chinese Monolingual Term Dictionaries

<!-- prettier-ignore -->
| Title | Entry Count | Information |
| ------ | ----------- | ----------- |
| ZH Wikipedia [2022-12-01] | 1249877 | **Author**: Wikipedians, DBPedia, Marv <br /> **Revision**: wikipedia_2023-12-20T01:18:42.692Z <br /> **URL**: https://github.com/MarvNC/wikipedia-yomitan <br /> **Attribution**: https://zh.wikipedia.org/ <br /> **Description**:<br /> Wikipedia short abstracts from the DBPedia dataset available at https://databus.dbpedia.org/dbpedia/text/short-abstracts.<br /><br />Recommended custom CSS:<br />div.gloss-sc-div[data-sc-wikipedia=term-specifier] {<br />  color: #e5007f;<br />} <br /> |
| 漢語大詞典 | 550544 | **Revision**: 漢語大詞典_1 <br /> |
| 萌典国语辞典 | 266956 | **Revision**: chrono7_moedict <br /> |
| 萌典 | 164269 | **Revision**: lix 1 pinyin <br /> |
| 兩岸詞典 | 163091 | **Revision**: 兩岸詞典_1 <br /> |
| 辭源 | 91538 | **Revision**: 辭源 <br /> |
| 牛津英汉汉英词典 | 74663 | **Revision**: lix 2 <br /> |
| 现代汉语规范词典 | 72841 | **Revision**: lix 1 <br /> |
| 五南國語活用辭典 | 59935 | **Revision**: lix 1 <br /> |
| 譯典通英漢雙向字典 | 30973 | **Revision**: lix 2 <br /> |
