# 分析 element-plus 源码

挖这个新坑的目的是，最近为 element-plus 的琐碎问题掉了不少头发，本着追查清楚问题的目的，建立这个仓库分析内部实现。

同时，element-plus 仓库也在与时俱进引入业界最佳标准，有幸给它提过几个 PR，能感受到收到社区认可的魅力，因此决定写这篇文章。

我先画个饼，大家先感受下我的思路：

- [ ] 分析结构，建立 demo
- [ ] 典型组件精读、剖析
- [ ] 官网 issues 问题追踪
- [ ] 官网 pr、roadmap 追踪
- [x] 问他核心开发缺不缺人。2021-11-05 提前完成了，我进组织了！
- [ ] 问他核心决策层缺不缺人

饼画完了，那就继续开始吧。
