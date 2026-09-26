import type { ComparisonSlug, Locale } from "./locales";

export interface ComparisonArticle {
  title: string;
  description: string;
  intro: string;
  dimensions: [string, string, string][];
  sections: [string, string][];
  verdict: string;
}

export const sourceLinks: Record<ComparisonSlug, { name: string; url: string }[]> = {
  "candy-ai": [
    { name: "Candy AI", url: "https://candy.ai/" },
    { name: "Candy AI privacy", url: "https://candy.ai/privacy-policy" }
  ],
  "crushon-ai": [
    { name: "CrushOn AI", url: "https://chat.crushon.ai/" },
    { name: "CrushOn AI memory help", url: "https://aiwiki.crushon.ai/wiki/Memories" }
  ],
  lovescape: [
    { name: "Lovescape platform overview", url: "https://help.lovescape.com/hc/en-us/articles/26017197133713-What-Is-Lovescape-AI-Companions-Chat-Image-Video-Generation-Platform" },
    { name: "Lovescape Chips", url: "https://help.lovescape.com/hc/en-us/articles/30828415556881-Lovescape-Chips-What-They-Are-How-They-Work-and-How-to-Use-Them" }
  ],
  girlfriendgpt: [
    { name: "GirlfriendGPT", url: "https://www.gptgirlfriend.online/" },
    { name: "GirlfriendGPT terms", url: "https://www.gptgirlfriend.online/legal/terms" }
  ],
  replika: [
    { name: "Replika official help", url: "https://help.replika.com/hc/en-us/articles/115001070951-What-is-Replika" },
    { name: "Replika privacy", url: "https://replika.com/legal/privacy/en" }
  ]
};

export const comparisonArticles: Partial<Record<Locale, Record<ComparisonSlug, ComparisonArticle>>> = {
  ja: {
    "candy-ai": {
      title: "OurDream AI vs Candy AI：発見と自作、どちらから始める？",
      description: "OurDream AI と Candy AI の人物発見、自作、会話、画像・動画、追加費用、プライバシーを用途別に比較します。",
      intro: "二つとも架空のコンパニオンを探すことも作ることもできます。Candy AI を「一覧から選ぶだけ」、OurDream AI を「作るだけ」と分けるのは正確ではありません。どちらの入口から始め、その後どの程度人物を調整できるかが比較点です。",
      dimensions: [["最初の入口", "短い説明から人物を生成し、公開人物も探せる", "Discover と Shorts で探し、自作もできる"], ["物語の展開", "会話を画像・動画・音声に広げる流れ", "会話と媒体機能を現在のプランで確認"], ["費用", "モデルと媒体の Dreamcoins を分ける", "通話・媒体・プランの現行条件を確認"]],
      sections: [["同じ人物案で両方の入口を試す", "明確に成人の架空の学芸員を一人設定し、見た目、動機、話し方を短く書きます。まず似た人物を発見機能で探し、次に自作機能で同じ案を作ります。探す速さと作った後の修正範囲を別々に記録すると、単なる『作れる／作れない』より具体的に判断できます。"], ["会話から二つの場面へ", "架空の展示会という安全な話題で十往復ほど会話し、途中の予定を後で聞き直します。次に昼と夜の画像を作り、顔と設定が続くか確認します。最高の一枚だけを比べず、修正や再生成も数えます。これは読者向けの方法であり、当サイトの実測順位ではありません。"], ["支払いとデータの境界", "OurDream のヘルプは通常チャットと、モデル・画像・動画・音声で使う Dreamcoins を区別しています。Candy AI も現行のプランと媒体条件を決済画面で確認してください。両者の会話履歴、公開範囲、退会時の削除条件を読み、実在者の写真や秘密を試験に使わないことが重要です。"]],
      verdict: "人物を作って複数の媒体で物語を進めたいなら OurDream AI の流れを試す価値があります。発見のしやすさや人物カードからの開始を重視するなら Candy AI も有力です。どちらも現行プラン、権利、再試行費用まで含めて決めましょう。"
    },
    "crushon-ai": {
      title: "OurDream AI vs CrushOn AI：人物制作か、コミュニティのロールプレイか",
      description: "OurDream AI と CrushOn AI を、公開人物の出どころ、モデル選択、記憶、画像・動画、課金条件で比較します。",
      intro: "CrushOn AI は公開キャラクターと長いロールプレイ、モデル選択を前面に出します。OurDream AI は人物設定から会話と媒体制作を一つの流れにまとめます。長文チャットが目的か、同じ人物を画像や映像にも表現したいかで試験項目が変わります。",
      dimensions: [["人物の出どころ", "公開人物と自作人物の区別を確認", "コミュニティ制作者と公開設定を確認"], ["記憶", "選んだ会話モデルと設定で試す", "保存メモリーと現在の文脈を分けて試す"], ["媒体", "画像・動画・音声を別途評価", "現在使える媒体機能を画面で確認"]],
      sections: [["公開人物と自作人物を混同しない", "CrushOn の公開カードを選ぶ場合、作者、設定、共有条件を読みます。OurDream でも公開人物と自作人物は別の試験です。独自の人物を作る比較では、同じ成人の架空設定と目標を両サービスに入力し、開始までの手間を記録します。"], ["記憶は数字より使われ方", "CrushOn の資料は保存した記憶と直近の会話文脈を区別しています。架空の町名を三つ伝え、話題を変えてから具体的に質問してください。保存操作をしたか、どのモデルとプランかも記録します。文脈長の宣伝だけで、自然な想起を保証することはできません。"], ["料金とプライバシー", "OurDream では Dreamcoins が必要なモデルや媒体作業を別に数えます。CrushOn では無料モデル、上位モデル、記憶や長文利用に必要な条件を確認します。公開人物に私的な情報を預けず、成人の架空設定のみを使います。"]],
      verdict: "チャットモデルを選び、コミュニティの多様な人物と長く会話することが中心なら CrushOn AI を検討してください。自作人物を会話、画像、動画へ展開するなら OurDream AI が比較の出発点です。記憶の良し悪しは同一条件で自分で確認します。"
    },
    lovescape: {
      title: "OurDream AI vs Lovescape：画像から動画までの制作工程",
      description: "OurDream AI と Lovescape の人物設定、画像・動画の一貫性、Dreamcoins と Chips、素材の権利を比較します。",
      intro: "Lovescape も人物作成、チャット、画像生成、発展中の動画機能を組み合わせています。単なる『恋愛会話アプリ』として扱うと、OurDream AI との共通点を見落とします。完成した短い場面を作るまでの手順と費用が核心です。",
      dimensions: [["画像から動画", "公式が案内する複数の生成方法を確認", "サービス内で作った画像から映像化する経路を確認"], ["人物の一貫性", "異なる場面でも顔と設定が続くか", "静止画と動画で同じ人物が保たれるか"], ["追加費用", "Dreamcoins の行動別消費", "契約と Chips の消費を別勘定"]],
      sections: [["一つの制作チェーンを最後まで追う", "明確に成人の架空人物を設定し、短い会話、肖像、別の場所の画像、数秒の動画へ進みます。各段階で何を修正し、何回失敗し、どの出力を使えると判断したか記録してください。宣伝用の最高傑作と初回結果の比較は公平ではありません。"], ["外部素材を持ち込めるか", "Lovescape の公式動画案内は、サービス内で生成した画像を動画の元にする流れを示し、任意の外部画像をアップロードする方式ではないと説明しています。すでに自分の素材を持つ人には重要な制約です。OurDream でも現在のモデルごとの入力条件を確認します。"], ["Chips と Dreamcoins を両方見積もる", "Lovescape は契約に加えて Chips を利用する機能があります。OurDream は Dreamcoins の用途をヘルプに示しています。再生成や動画延長も含め、一つの使える作品に必要な総額を現在のアカウント画面で比べてください。実在人物の模倣や無許可素材は使わないでください。"]],
      verdict: "複数の人物やモデルを使いながら会話と媒体を往復するなら OurDream AI を試しましょう。一枚のサービス内画像から動画へ進む制作手順が主目的なら Lovescape の実際の経路を確認します。最終判断には成功率、権利、総費用が必要です。"
    },
    girlfriendgpt: {
      title: "OurDream AI vs GirlfriendGPT：公開人物と自作人物の比較",
      description: "OurDream AI と GirlfriendGPT の人物発見、自作設定、チャット、画像、公開権利、プラン制限を比べます。",
      intro: "GirlfriendGPT の規約は、利用者が作った人物と自分で作成する人物、チャットと画像生成を明記しています。OurDream AI にも人物発見と自作がありますが、音声・動画へつなぐ幅が比較軸です。最初の返答だけで勝敗を決めないようにします。",
      dimensions: [["公開人物", "人物の公開・非公開を確認", "制作者の表示と利用範囲を確認"], ["自作", "外見・声・背景を設定", "プロフィールと最初の場面を設計"], ["媒体", "画像・動画・音声の現在の解放範囲", "画像の権限とクレジットを確認"]],
      sections: [["二種類の試験を分ける", "まず同じジャンルの公開人物を双方から選び、探しやすさと作者情報を比べます。次に架空の成人人物を新しく作り、目標、話し方、挨拶を同じ条件にします。公開人物の豊富さと自作の自由度は別の評価です。"], ["会話と画像の連携", "十往復ほど安全な架空の場面を進め、途中の事実を後で尋ねます。二枚の画像では同じ人物が異なる照明でも分かるか、再試行が何回必要かを見ます。GirlfriendGPT に必要な動画機能があると推測せず、今の画面で確認してください。"], ["作者の権利と支出", "GirlfriendGPT の規約は投稿物と追加クレジットを扱います。他人が作った人物を再利用・公開する前に利用条件を読みましょう。OurDream も契約と Dreamcoins の範囲を分けます。どちらのプラットフォームにも無断の実在者画像や私的な会話を入れないことが前提です。"]],
      verdict: "多くの作者が公開した人物を探す時間を楽しむなら GirlfriendGPT が適切な候補です。自作人物の声や画像・動画を一つの物語に組み込むなら OurDream AI を試す理由があります。アクセス条件と権利を確かめてから選びましょう。"
    },
    replika: {
      title: "OurDream AI vs Replika：制作室か、一人のAI友人か",
      description: "OurDream AI と Replika を、複数人物の制作、継続対話、視覚機能、契約、個人情報の扱いで比較します。",
      intro: "OurDream AI は複数の架空人物や場面を作る制作室に近く、Replika は一人のAI友人との継続した関係を中心に説明されています。どちらの会話が『優しい』かより、自分が何を続けたいのかを先に決めるべきです。",
      dimensions: [["主な目的", "人物を設計して物語や媒体へ展開", "同じ相手との日々の会話を続ける"], ["評価する記憶", "人物設定と場面の整合性", "継続した会話での情報の扱い"], ["費用とデータ", "Dreamcoins と媒体制作", "プラン、購入経路、個人情報の保管"]],
      sections: [["同じ質問だけでは比較できない", "OurDream で明確に成人の架空人物を一人作り、安全な展示会の計画を話します。Replika では利用したい関係設定で、別の架空の好みを伝えます。翌日それぞれに具体的に尋ねます。親密な言葉だけを記憶の証拠とせず、選んだプランも記録します。"], ["画像制作と継続対話", "OurDream では人物が二つの画像や短い動画でも同一に見えるか、再生成の回数まで確認します。Replika では同じ相手と再開するときの自然さや、保存された情報を編集・削除できるかを見ます。Replika を動画制作室として評価するのは目的違いです。"], ["契約と感情の境界", "OurDream の媒体作業には Dreamcoins が関わる場合があります。Replika は契約段階と App Store・Web など購入経路で解約手続きが異なります。どちらもAIであり人間の相談相手や専門家の代わりではありません。住所や健康情報を記憶テストに使わず、現行のプライバシー文書を読んでください。"]],
      verdict: "多数の架空人物を作り、会話と画像・動画を結ぶことが目的なら OurDream AI。一人の仮想友人と継続する会話が中心なら Replika を比較してください。用途を揃えた自分の試用と現在の料金・削除条件が結論になります。"
    }
  },
  ko: {
    "candy-ai": {
      title: "OurDream AI vs Candy AI: 캐릭터를 찾을까, 직접 만들까?",
      description: "OurDream AI와 Candy AI의 Discover·Shorts, 캐릭터 제작, 채팅, 이미지·영상, 비용 및 개인정보를 비교합니다.",
      intro: "두 플랫폼 모두 캐릭터를 발견하고 직접 만들 수 있습니다. Candy AI가 단순 목록이고 OurDream AI만 제작 도구라고 나누는 것은 부정확합니다. 발견부터 대화와 미디어까지 이어지는 과정에서 어느 쪽이 내 취향을 더 잘 반영하는지 살펴야 합니다.",
      dimensions: [["시작 지점", "짧은 설명으로 캐릭터를 만들거나 탐색", "Discover·Shorts 탐색과 직접 제작"], ["이야기 확장", "채팅에서 이미지·영상·음성으로 이동", "현행 계정에서 대화와 미디어 접근 확인"], ["비용", "모델과 미디어의 드림코인 구분", "플랜·통화·생성 제한을 결제 전 확인"]],
      sections: [["발견과 제작을 따로 시험하기", "명확한 성인 가상 큐레이터에게 전시회 준비라는 목표를 줍니다. 두 서비스에서 비슷한 공개 캐릭터를 먼저 찾은 다음, 같은 설명으로 자신만의 캐릭터를 만드세요. 발견에 걸린 시간과 제작 후 수정 가능한 범위는 서로 다른 결과입니다."], ["대화 다음에 장면을 만들기", "안전한 허구의 장면에서 대화를 이어 가다가 약속한 내용을 다시 물어봅니다. 낮과 밤의 이미지를 만들 수 있다면 얼굴과 말투의 설정이 이어지는지 기록하고, 실패한 생성도 세어 보세요. 이는 독자가 따라 할 검증 방법이며 당사가 수행한 벤치마크가 아닙니다."], ["요금표와 개인정보 확인", "OurDream 도움말은 일반 채팅과 일부 모델·이미지·영상·음성에 드는 드림코인을 나눕니다. Candy AI도 현재 플랜에서 통화와 미디어가 어디까지 가능한지 확인하세요. 두 서비스의 채팅 보관과 삭제 정책을 읽고 실제 사람의 얼굴이나 민감한 정보를 시험에 사용하지 마세요."]],
      verdict: "캐릭터를 세밀하게 설정하고 대화에서 시각적 이야기로 이어가려면 OurDream AI를 우선 시험하세요. 탐색 피드에서 빠르게 상대를 찾는 과정이 중요하면 Candy AI도 고려할 만합니다. 재생성 비용과 권리까지 확인한 뒤 결정해야 합니다."
    },
    "crushon-ai": {
      title: "OurDream AI vs CrushOn AI: 제작 도구와 커뮤니티 역할극",
      description: "OurDream AI와 CrushOn AI를 공개 캐릭터의 출처, 모델 선택, 기억, 미디어 제작과 과금 기준으로 비교합니다.",
      intro: "CrushOn AI는 공개 캐릭터, 긴 역할극과 모델 선택을 앞세웁니다. OurDream AI는 캐릭터 만들기와 채팅, 이미지·영상을 한 흐름에 연결합니다. 긴 대화가 목적인지, 한 인물을 여러 미디어에 표현하고 싶은지부터 정해야 합니다.",
      dimensions: [["캐릭터 출처", "공개 캐릭터와 직접 만든 캐릭터 구분", "커뮤니티 창작자와 공개 설정 확인"], ["기억", "선택한 채팅 모델에서 직접 점검", "저장된 메모리와 최근 문맥을 분리"], ["작업 비용", "드림코인 사용 모델·미디어 확인", "무료 모델과 상위 모델의 조건 확인"]],
      sections: [["커뮤니티 카드를 읽는 법", "CrushOn에서 다른 사용자가 만든 캐릭터를 고르면 창작자, 배경 설정, 공유 조건을 살펴보세요. OurDream의 공개 캐릭터를 고르는 시험과 새 캐릭터 제작 시험도 분리해야 공정합니다. 자신이 만든 캐릭터를 비교할 때는 동일한 성인 가상 설정과 목표를 사용합니다."], ["숫자보다 기억의 동작", "CrushOn의 설명은 저장 메모리와 현재 대화 맥락을 구분합니다. 가상의 도시 이름과 사건을 알려 주고 다른 주제로 이동한 뒤 직접 되물으세요. 저장 기능을 썼는지, 어떤 모델과 요금제였는지 기록하세요. 긴 문맥 길이가 자연스러운 회상을 보장하지는 않습니다."], ["미디어와 개인정보의 경계", "OurDream의 강점이 이미지·영상 연계에 있을 수 있지만 실제 계획에 포함되는지를 먼저 확인하세요. CrushOn에서는 역할극의 모델과 대화 조건을 우선 평가합니다. 어느 쪽이든 공개 캐릭터에 실제 비밀을 입력하지 않고 현재 데이터 정책을 읽어야 합니다."]],
      verdict: "커뮤니티의 다양한 인물과 모델을 고르며 긴 대화를 하는 것이 핵심이면 CrushOn AI가 적합한 후보입니다. 한 캐릭터를 직접 설계해 채팅·이미지·영상으로 확장하려면 OurDream AI를 먼저 시험하세요. 기억력은 같은 조건에서 직접 확인해야 합니다."
    },
    lovescape: {
      title: "OurDream AI vs Lovescape: 이미지에서 영상까지 무엇이 다른가",
      description: "두 서비스의 캐릭터 설정, 이미지·영상 일관성, 드림코인과 Chips, 업로드·게시 권리를 비교합니다.",
      intro: "Lovescape도 캐릭터, 채팅, 이미지 생성, 발전하는 영상 도구를 제공한다고 설명합니다. 단순한 연애 채팅 앱으로만 분류하면 OurDream AI와 겹치는 제작 과정을 놓칩니다. 실제 비교는 하나의 인물을 정지 이미지와 짧은 영상까지 완성하는 데 드는 단계와 비용입니다.",
      dimensions: [["이미지→영상", "사용 가능한 생성 방식과 모델 확인", "서비스 내부에서 만든 이미지를 영상화"], ["일관성", "두 장면에서 외모와 설정 유지", "정지 화면에서 움직임으로 이어지는지"], ["추가 비용", "작업별 드림코인 기록", "구독과 Chips 비용을 따로 계산"]],
      sections: [["같은 창작 과제를 끝까지 따라가기", "허구의 성인 인물을 만들고 간단한 대화, 인물 사진, 다른 배경의 이미지, 짧은 영상 순서로 진행하세요. 단계마다 수정 횟수와 실패한 결과를 적어야 실제 사용성을 알 수 있습니다. 홍보 영상 하나와 상대 서비스의 첫 시도를 비교해서는 안 됩니다."], ["외부 이미지를 쓸 수 있는가", "Lovescape의 공식 영상 설명은 플랫폼에서 생성한 이미지를 출발점으로 제시하며 임의의 외부 사진 업로드와는 다른 흐름이라고 밝힙니다. 기존 이미지 자산이 있다면 중요한 차이입니다. OurDream에서도 모델과 계정별 입력 조건을 현재 화면에서 확인하세요."], ["총비용과 권리", "Lovescape에는 구독 이외에 Chips를 쓰는 기능이 있고 OurDream은 드림코인 사용처를 안내합니다. 이미지 재생성, 영상 길이 변경, 저장·공유 권리를 포함해 실제로 쓸 수 있는 결과 하나의 비용을 비교하세요. 동의 없는 실제 인물 모사는 피해야 합니다."]],
      verdict: "여러 캐릭터와 모델을 오가며 채팅과 미디어를 연결하려면 OurDream AI를 살펴보세요. 내부 생성 이미지에서 영상으로 이어지는 과정이 주목적이면 Lovescape의 작업 경로를 검증해 보세요. 사용 가능한 결과, 권리, 총비용이 판단 기준입니다."
    },
    girlfriendgpt: {
      title: "OurDream AI vs GirlfriendGPT: 공개 캐릭터와 직접 만든 캐릭터",
      description: "OurDream AI와 GirlfriendGPT의 창작자 캐릭터, 프로필 제작, 역할극, 이미지, 게시 권리 및 요금제 한계를 비교합니다.",
      intro: "GirlfriendGPT의 공식 약관은 다른 사용자가 만든 캐릭터와 직접 제작한 캐릭터, 채팅과 이미지 생성을 설명합니다. OurDream에도 탐색과 직접 만들기가 있지만 음성과 영상으로 이어지는 범위가 추가 비교점입니다. 첫 응답만으로는 두 서비스를 평가할 수 없습니다.",
      dimensions: [["공개 인물", "공개 범위와 제작자 정보 확인", "캐릭터의 원 제작자와 이용 범위 확인"], ["자체 제작", "외모·음성·배경 설정", "프로필과 첫 장면 작성"], ["미디어", "이미지·영상·음성 조건", "이미지 생성과 크레딧 조건"]],
      sections: [["공개 탐색과 새 제작을 분리하기", "두 서비스에서 비슷한 장르의 공개 캐릭터를 찾고 출처가 얼마나 명확한지 봅니다. 다음에는 같은 성인 가상 인물을 새로 만들고 목표·말투·인사말을 맞춰 보세요. 공개 목록의 풍부함과 제작 도구의 자유도는 별개 점수입니다."], ["대화와 두 장면 시험", "허구의 대화를 여러 차례 이어 간 뒤 초반의 무해한 사실을 되묻습니다. 낮과 밤의 이미지에서 같은 인물을 알아볼 수 있는지도 확인하세요. 영상이 필요하다면 GirlfriendGPT에서 현재 제공되는지 먼저 확인해야지, 자동으로 기능을 있다고 가정해서는 안 됩니다."], ["게시 권리와 결제", "GirlfriendGPT 약관은 이용자 게시물과 추가 크레딧을 다룹니다. 다른 창작자의 캐릭터를 가져오거나 외부에 공개하려면 권리를 살펴야 합니다. OurDream도 구독과 드림코인을 구분해 계산하고, 실제 사람의 얼굴이나 허가 없는 자료는 사용하지 않습니다."]],
      verdict: "다른 창작자가 만든 다양한 설정을 탐색하는 즐거움이 크다면 GirlfriendGPT가 적합합니다. 하나의 직접 만든 캐릭터를 채팅·음성·이미지·영상으로 확장하려면 OurDream AI를 시험하세요. 현재 접근 조건과 게시 권리가 결론을 바꿀 수 있습니다."
    },
    replika: {
      title: "OurDream AI vs Replika: 창작 스튜디오인가, 한 명의 AI 친구인가",
      description: "여러 캐릭터 제작과 한 동반자와의 지속 대화, 시각 기능, 구독 경로 및 개인정보를 비교합니다.",
      intro: "OurDream AI는 여러 허구 인물과 장면을 제작하는 작업 공간에 가깝습니다. Replika는 공식 도움말에서 한 AI 친구와 이어지는 관계를 중심으로 설명합니다. 누가 더 다정한지보다 자신이 어떤 경험을 반복할지를 먼저 결정해야 합니다.",
      dimensions: [["핵심 목표", "여러 인물과 장면을 제작", "같은 AI 친구와 관계를 이어감"], ["기억 시험", "설정과 이야기의 일관성", "지속 대화에서 정보 활용"], ["비용과 데이터", "드림코인과 미디어 사용", "구독 단계·구매 경로·개인정보"]],
      sections: [["똑같은 질문만으로 비교할 수 없다", "OurDream에서는 분명한 성인 가상 인물이 상상의 전시회를 준비하게 합니다. Replika에서는 실제로 쓸 관계 설정을 선택하고 별도의 허구 사실을 알려 주세요. 나중에 직접 되물으며 기억 여부를 기록하되, 친밀한 말투를 기억의 증거로 보지 마세요."], ["영상 제작과 꾸준한 대화", "OurDream에서는 얼굴이 두 이미지와 짧은 영상에서 유지되는지, 재생성 횟수까지 살핍니다. Replika에서는 같은 상대와 다시 대화할 때의 흐름과 저장 정보를 수정·삭제하는 방법을 봅니다. Replika를 영상 제작실 기준으로 평가하면 목적을 잘못 맞춘 셈입니다."], ["결제와 감정적 경계", "OurDream의 미디어 제작에는 드림코인이 필요할 수 있습니다. Replika는 구독 단계와 웹·앱스토어 등 결제 경로에 따라 취소 방식이 다릅니다. 두 서비스 모두 사람이 아니며 전문 상담을 대신하지 않습니다. 주소나 건강 정보로 기억력을 시험하지 말고 최신 개인정보 정책을 읽으세요."]],
      verdict: "여러 허구 인물을 만들고 채팅·이미지·영상을 연결하려면 OurDream AI를 선택 후보로 삼으세요. 한 가상 친구와 지속적인 대화가 목적이면 Replika가 더 직접적인 비교 대상입니다. 비용과 삭제 조건을 현재 공식 자료로 확인해야 합니다."
    }
  },
  "zh-hant": {
    "candy-ai": {
      title: "OurDream AI vs Candy AI：先探索，還是自己建立角色？",
      description: "比較 OurDream AI 與 Candy AI 的 Discover、Shorts、自建角色、聊天、影像、收費和隱私。",
      intro: "兩者都能探索現有角色，也能自行建立角色。把 Candy AI 說成只有目錄、OurDream AI 說成只有製作工具，會讓比較失真。真正要看的是從找到角色到持續聊天及生成畫面的過程。",
      dimensions: [["使用入口", "以簡短描述建立角色，也能探索", "Discover、Shorts 與自建角色"], ["媒體延伸", "由聊天走向圖片、影片和語音", "確認目前方案可用的媒體功能"], ["費用", "拆分模型與 Dreamcoins 消耗", "核對通話、生成和訂閱限制"]],
      sections: [["分別測試探索與自建", "設計一位明確成年的虛構策展人，給她展覽開幕的目標。先在兩站尋找接近的公開角色，再以同一段設定自己建立。記錄找到合適角色的時間，以及建立後可修改的性格和外觀；這是兩個不同的問題。"], ["把對話接到兩個場景", "以虛構展覽進行數輪安全對話，換題後回頭問先前約定。若方案允許，再做白天和夜晚兩張圖片，觀察角色是否仍可辨認。失敗的生成與重試也要計入，不能只拿最好看的單張宣傳圖比較。這是提供給讀者的測試方法，不是本站宣稱的實測排名。"], ["費用與資料處理", "OurDream 幫助中心區分一般聊天及部分模型、圖片、影片、語音的 Dreamcoins。Candy AI 的方案與媒體可用範圍也應以即時結帳畫面為準。先讀雙方的聊天記錄、公開範圍及刪除政策，勿以真人照片或私密資訊做測試。"]],
      verdict: "若想仔細設計角色並把對話變成視覺故事，可先試 OurDream AI。若希望透過探索畫面更快找到合適對象，Candy AI 也值得評估。別漏算重做成本與素材權利。"
    },
    "crushon-ai": {
      title: "OurDream AI vs CrushOn AI：角色製作與社群扮演",
      description: "比較公開角色來源、聊天模型、記憶機制、圖片與影片製作、收費及資料界線。",
      intro: "CrushOn AI 的官方介紹著重公開角色、長篇角色扮演與模型選擇；OurDream AI 將角色設定、聊天及視覺創作串成一條路徑。你是想長聊，還是希望同一角色出現在不同畫面？答案決定測試重點。",
      dimensions: [["角色來源", "分開看公開與自建角色", "查核社群創作者及分享設定"], ["記憶方式", "按選用模型自行測試", "區分儲存記憶與當前脈絡"], ["成本", "分開計算 Dreamcoins 與訂閱", "確認免費、進階模型與記憶條件"]],
      sections: [["不要混合公開與自建成績", "使用 CrushOn 的公開人物時，先讀作者和故事設定；自建人物則以同一份成年虛構背景輸入兩邊。公開角色的多樣性和自建工具的精細度不是同一項成績。"], ["記憶不只是一個數字", "CrushOn 的說明將已儲存的記憶與近期上下文分開。提供幾個虛構城鎮細節，聊其他話題後再具體提問，同時記錄模型、方案及是否按過儲存。宣稱的上下文長度不保證角色自然地使用舊資料。"], ["媒體與隱私", "如果你需要圖片、影片或聲音，應在 OurDream 中獨立確認可用性及成本；CrushOn 的主要比較則是人物、模型和長聊控制。不要把真實地址或私人對話交給公開角色；付費前查閱雙方現行的資料政策。"]],
      verdict: "偏好社群裡不同人物、可切換模型及長篇互動時，CrushOn AI 較值得先看。想把自己創造的角色延伸至聊天、圖片與影片，則從 OurDream AI 試起。記憶品質必須在可比條件下自行驗證。"
    },
    lovescape: {
      title: "OurDream AI vs Lovescape：從角色圖片到短片的完整比較",
      description: "檢視兩站的角色設定、圖片與影片一致性、Dreamcoins、Chips，以及素材與公開權利。",
      intro: "Lovescape 也提供角色製作、聊天、圖片及發展中的影片工具。把它簡化為戀愛對話服務，會忽略和 OurDream AI 相同的創作流程。要比較的是讓同一個虛構成年人從文字設定走到可用短片的全部步驟。",
      dimensions: [["圖片接影片", "確認官方列出的影像模型與格式", "先在平台內產生圖片再進入影片"], ["人物一致性", "不同場景下的外觀與角色設定", "靜態影像接到動態時的辨識度"], ["額外支出", "按操作記錄 Dreamcoins", "訂閱費與 Chips 分開計算"]],
      sections: [["走完整條創作鏈", "以一位清楚成年的虛構人物開始，依序建立設定、聊天、肖像、第二張不同場景的圖片與短片。每一步記錄調整、失敗次數和可用成果，不要把其中一站的最佳宣傳示範與另一站的首次生成相比。"], ["外部圖片能否使用", "Lovescape 的官方圖轉影片說明以平台內生成的圖片為起點，並指出並非任意上傳外部檔案。已有合法圖庫的創作者需要先確認此限制。OurDream 不同模型與帳戶的輸入條件也應以目前介面為準。"], ["別只比較月費", "Lovescape 有訂閱以外的 Chips；OurDream 的幫助中心則列出 Dreamcoins 的使用項目。把重試、影片延長、下載與分享權利納入一件可用作品的總成本。兩者都不應被拿來無授權模仿真人。"]],
      verdict: "需要在多名角色、聊天模型與各種影像格式間切換，可先評估 OurDream AI。若重點是平台內圖片接續短片的流程，應完整測試 Lovescape。最後看可用作品數、權利與總費用，而非單一示範畫面。"
    },
    girlfriendgpt: {
      title: "OurDream AI vs GirlfriendGPT：公開角色、自建角色與創作者權利",
      description: "比較兩者的角色探索與自建、聊天、圖片、媒體擴展、點數及發佈權利。",
      intro: "GirlfriendGPT 的官方條款提到其他使用者建立的角色、自建角色、聊天及圖片。OurDream AI 也有探索與自建，但另把聲音和影片納入創作路徑。公開角色庫的便利，與打造自己角色的自由，必須分開衡量。",
      dimensions: [["公開角色", "查看公開範圍和角色來源", "確認作者標示與使用許可"], ["建立新角色", "調整外型、聲音和背景", "設定人物資料與開場"], ["媒體", "核對圖片、影片、語音及幣值", "確認圖片生成和點數"]],
      sections: [["先比尋找，再比製作", "兩邊先找同類型的公開角色，看創作者資訊是否清晰。第二輪才用相同的虛構成年人物目標、語氣及開場重新建立角色。發現他人作品的效率，不能直接代表自建工具好壞。"], ["長一點的對話及兩張圖", "讓角色在安全的虛構情節中交談，稍後具體詢問前面提過的事。若可以產圖，分別請求白天和夜晚同一人物，記錄外觀是否維持及重試次數。若你的需求包含影片，不要自行假設 GirlfriendGPT 現在也有相同格式。"], ["投稿與收費條件", "GirlfriendGPT 條款處理使用者投稿與額外點數。借用別人的角色或圖片前，須理解許可及公開設定；OurDream 的訂閱和 Dreamcoins 也要分開算。所有測試都應避開真人面孔和沒有授權的作品。"]],
      verdict: "重視瀏覽眾多創作者的角色，可優先考慮 GirlfriendGPT。打算從一名自建人物延伸到聊天、聲音、圖片和影片，可先試 OurDream AI。結論仍取決於現行方案及素材權利。"
    },
    replika: {
      title: "OurDream AI vs Replika：創作多名人物，還是陪伴一位朋友？",
      description: "比較 OurDream AI 與 Replika 的角色數量、延續對話、視覺功能、訂閱及個人資料處理。",
      intro: "OurDream AI 比較像建立多位虛構角色及場景的創作室；Replika 官方資料則把一位持續互動的 AI 朋友放在中心。不能只問哪個回答比較溫柔，而應先弄清你想反覆使用的體驗。",
      dimensions: [["主要目的", "多角色、對話與影像敘事", "與同一位夥伴長期互動"], ["記憶測試", "人物設定和情節是否一致", "持續對話中如何使用已知資訊"], ["費用與資料", "Dreamcoins 及媒體生成", "訂閱層級、購買管道與隱私"]],
      sections: [["讓測試符合各自目的", "在 OurDream 建立一名清楚成年的虛構策展人，討論想像中的展覽。對 Replika 則選擇你實際想用的關係模式，提供另一項無害的虛構喜好。隔一段時間後直接提問；親切語氣本身不是記憶證據。"], ["影像和日常對話是兩種強項", "OurDream 適合查看同一人物能否在兩張圖片與短片中保持辨識度，也需記錄重做次數。Replika 更適合看重新打開對話時是否自然，以及已保存的資訊能否查看、修改或刪除。把它當影片工作室評分並不公平。"], ["訂閱與情感界線", "OurDream 的影像工作可能消耗 Dreamcoins；Replika 依網頁或應用程式商店等購買途徑有不同取消方式。兩者都是 AI，不應代替真人支持或專業協助。勿以地址、健康資訊測試記憶；先讀當前隱私條款。"]],
      verdict: "想建立多個人物並串聯聊天、圖片及影片，可優先試 OurDream AI。想與同一名 AI 朋友持續聊天，Replika 才是相對應的選項。實際試用、完整費用與刪除控制比口號可靠。"
    }
  },
  es: {
    "candy-ai": {
      title: "OurDream AI vs Candy AI: descubrir personajes o crearlos desde cero",
      description: "Compara Discover, Shorts, creación propia, chat, imágenes, vídeo, gasto adicional y privacidad en OurDream AI y Candy AI.",
      intro: "Las dos plataformas permiten explorar personajes y crear uno propio. Sería engañoso presentar Candy AI como un mero catálogo u OurDream AI como un estudio sin descubrimiento. Lo que importa es el camino desde una idea hasta una conversación y escenas que merezcan la pena conservar.",
      dimensions: [["Entrada", "Descripción breve y búsqueda de personajes", "Discover, Shorts y creación propia"], ["Continuidad", "Chat unido a imagen, vídeo y voz", "Comprueba los medios que incluye tu plan"], ["Presupuesto", "Modelos y Dreamcoins por separado", "Mensajes, llamadas y generaciones del plan vigente"]],
      sections: [["Prueba por separado búsqueda y creación", "Imagina a una conservadora de museo claramente adulta con un objetivo ficticio. Busca primero un perfil parecido en cada servicio; luego usa el mismo texto para crear uno nuevo. Mide cuánto tardas en empezar y qué rasgos puedes corregir después. La facilidad para descubrir y la libertad de diseño son resultados diferentes."], ["De la charla a dos escenas", "Habla de una exposición inventada, cambia de tema y vuelve a preguntar por un detalle concreto. Si tu cuenta permite imágenes, sitúa al personaje de día y de noche. Anota cuántos intentos hicieron falta, no solo cuál fue la foto más bonita. Este procedimiento es una sugerencia para el lector, no un resultado medido por nuestra redacción."], ["Qué pagas y qué entregas", "La ayuda de OurDream separa el chat ordinario de modelos y acciones multimedia que consumen Dreamcoins. En Candy AI consulta el acceso actual a llamadas, imágenes y vídeo en su propia pantalla de pago. Lee las políticas de historial, publicación y eliminación antes de introducir datos: una foto real o una confidencia no son material de prueba."]],
      verdict: "OurDream AI merece una prueba si quieres diseñar un personaje y convertir el chat en relato visual. Candy AI puede encajar mejor si te convence la exploración por Discover y Shorts. Decide con el coste de reintentos y las reglas de uso de medios, no solo con la primera impresión."
    },
    "crushon-ai": {
      title: "OurDream AI vs CrushOn AI: estudio creativo o rol comunitario",
      description: "Compara autoría de personajes, modelos de chat, memoria, generación visual, gasto y privacidad de ambas plataformas.",
      intro: "CrushOn AI destaca en sus páginas personajes de la comunidad, rol extenso y selección de modelos. OurDream AI enlaza diseño del personaje, conversación e imágenes o vídeo. Antes de valorar cuál te sirve, decide si tu uso habitual será una larga historia escrita o un personaje que deba existir también en escenas visuales.",
      dimensions: [["Origen del personaje", "Distingue perfiles públicos y propios", "Revisa creador y permisos del perfil comunitario"], ["Memoria", "Comprueba el modelo elegido", "Diferencia memoria guardada y contexto inmediato"], ["Medios", "Imagen, vídeo y voz como tarea propia", "Verifica medios disponibles en tu plan"]],
      sections: [["No mezcles perfiles públicos con personajes tuyos", "Al elegir un personaje en CrushOn, lee su creador y premisa. En OurDream haz lo mismo si exploras perfiles publicados. Para evaluar el creador de personajes, diseña una persona adulta ficticia con idéntica meta y personalidad en ambos productos. Un catálogo grande no prueba que el editor sea mejor."], ["La memoria no cabe en una sola cifra", "La documentación de CrushOn distingue recuerdos guardados del contexto reciente de la conversación. Introduce tres hechos inocuos sobre una ciudad inventada y pregúntalos tras cambiar de tema. Apunta si guardaste un recuerdo, qué modelo empleaste y qué plan tenías. Una ventana de contexto anunciada no garantiza que el personaje recuerde de manera natural."], ["Medios, precio y límites", "En OurDream separa Dreamcoins de modelos, imágenes, vídeo y voz. En CrushOn comprueba qué modelos y herramientas de memoria requieren pago. Si el objetivo es solo rol escrito, no sumes puntos artificiales a funciones de vídeo que nunca usarás. En perfiles públicos no deposites datos íntimos y consulta las políticas actuales."]],
      verdict: "CrushOn AI tiene sentido si buscas variedad de personajes creados por la comunidad y control sobre el modelo para rol largo. OurDream AI merece prioridad si vas a diseñar un personaje y producir escenas visuales con él. La calidad de memoria requiere tu propia prueba comparable."
    },
    lovescape: {
      title: "OurDream AI vs Lovescape: del personaje a un vídeo utilizable",
      description: "Compara el flujo de imagen a vídeo, coherencia del personaje, Dreamcoins, Chips, límites de entrada y derechos.",
      intro: "Lovescape también reúne personaje, chat, generación de imágenes y herramientas de vídeo. Tratarlo como una simple alternativa de conversación romántica ocultaría la coincidencia importante con OurDream AI: ambos invitan a construir escenas. Compara el recorrido completo hasta obtener un clip que realmente quieras usar.",
      dimensions: [["Imagen a vídeo", "Consulta los modelos y formatos disponibles", "Parte de imágenes generadas dentro de Lovescape"], ["Consistencia", "Identidad entre escenas y estilos", "Mismo personaje al animar una imagen"], ["Coste", "Dreamcoins por acción", "Suscripción más Chips cuando proceda"]],
      sections: [["Un encargo creativo de principio a fin", "Crea una persona ficticia inequívocamente adulta. Conversa brevemente, genera un retrato, cambia el escenario y, si el plan lo permite, anima una imagen. Apunta los cambios de instrucción, intentos fallidos y resultados útiles en cada paso. Comparar un vídeo promocional con el primer intento del rival no sería justo."], ["La procedencia de la imagen importa", "La guía oficial de Lovescape explica un recorrido que anima imágenes creadas en la propia plataforma y no una subida arbitraria de archivos externos. Para quien ya posee una biblioteca de imágenes autorizadas, esa limitación puede decidir la elección. Verifica también los requisitos de entrada del modelo de OurDream que piensas usar."], ["No confundas cuota con coste final", "Lovescape utiliza Chips para determinadas acciones además de la suscripción; la ayuda de OurDream describe usos de Dreamcoins. Calcula reintentos, extensión del vídeo y permisos de guardar o compartir. Utiliza solo personajes ficticios y material autorizado: ninguna herramienta da permiso para imitar a una persona real."]],
      verdict: "Prueba OurDream AI si necesitas alternar varios personajes, modelos de chat y formatos de creación. Examina Lovescape si tu tarea principal es convertir una imagen hecha allí en vídeo. La decisión depende de resultados aprovechables, derechos y gasto total, no del precio destacado."
    },
    girlfriendgpt: {
      title: "OurDream AI vs GirlfriendGPT: catálogo de creadores y personaje propio",
      description: "Analiza exploración, creación de perfiles, rol, imágenes, publicación, créditos y derechos en ambos servicios.",
      intro: "Las condiciones oficiales de GirlfriendGPT mencionan personajes de otros usuarios y personajes propios, además de chat e imágenes. OurDream AI también combina perfiles publicados y creación, pero añade un camino más amplio hacia voz y vídeo. Hay que medir por separado la calidad del catálogo y el control sobre una persona inventada desde cero.",
      dimensions: [["Personajes públicos", "Comprueba visibilidad y procedencia", "Revisa nombre del creador y permisos"], ["Creación", "Aspecto, voz e historia", "Perfil y mensaje inicial"], ["Medios", "Imagen, vídeo, voz y Dreamcoins", "Imágenes y créditos del plan actual"]],
      sections: [["Dos pruebas, no una", "Primero busca un personaje público de género parecido en ambas plataformas y observa la atribución al autor. Después crea una persona adulta ficticia con la misma meta y tono. Que sea fácil elegir una ficha ya hecha no demuestra que el editor de personajes ofrezca más control; son dos tareas distintas."], ["Continuidad y derechos", "Mantén una escena segura durante varios turnos y pregunta después por un dato mencionado al principio. Si generas dos imágenes, cambia la luz y cuenta reintentos. No supongas que GirlfriendGPT ofrece el mismo vídeo que OurDream sin verificarlo hoy. Si quieres reutilizar un personaje ajeno, lee antes qué derechos concede su creador y el servicio."], ["Créditos y publicación", "Las condiciones de GirlfriendGPT tratan aportaciones de usuarios y créditos adicionales. OurDream distingue suscripción y Dreamcoins. Compara el coste de tu uso real, así como la posibilidad de publicar, retirar o borrar material. Nunca utilices la cara de alguien identificable sin autorización."]],
      verdict: "GirlfriendGPT es un candidato fuerte si disfrutas explorando muchas premisas aportadas por creadores. OurDream AI encaja mejor si quieres diseñar una identidad propia y llevarla al chat, la voz, las imágenes y el vídeo. El plan actual y las reglas de publicación pueden inclinar la balanza."
    },
    replika: {
      title: "OurDream AI vs Replika: taller de ficción o un único amigo virtual",
      description: "Contrasta varios personajes y medios en OurDream AI con la relación continua, suscripción y tratamiento de datos de Replika.",
      intro: "OurDream AI funciona como taller para inventar varios personajes y escenas. Replika se presenta en su ayuda oficial como un compañero personal que evoluciona durante las conversaciones. No tiene sentido elegir por quién parece más cariñoso en la primera respuesta: la diferencia principal es qué experiencia quieres repetir.",
      dimensions: [["Objetivo", "Crear diferentes personajes y escenas", "Desarrollar un único compañero"], ["Memoria", "Coherencia de perfil y narración", "Uso de información en una relación continua"], ["Coste y datos", "Dreamcoins y medios", "Nivel de suscripción y canal de compra"]],
      sections: [["Ajusta el ensayo a cada producto", "En OurDream inventa a una persona adulta que prepara una exposición imaginaria. En Replika elige el tipo de relación que de verdad te interesa e introduce otra preferencia ficticia. Regresa más tarde y pregunta directamente por los detalles, sin sugerir la respuesta. El tono afectuoso no es una prueba suficiente de memoria."], ["Creación frente a continuidad", "En OurDream examina si el mismo personaje se reconoce en dos imágenes y un clip corto, contando los intentos. En Replika fíjate en si retomar la conversación con una sola persona es cómodo y en cómo se consultan o borran datos aprendidos. Calificarlo como estudio de vídeo desviaría el análisis."], ["Suscripciones y límites emocionales", "OurDream puede cobrar Dreamcoins por generar medios. La ayuda de Replika diferencia planes y canales de compra; borrar la aplicación no cancela necesariamente la suscripción. Ninguno de los dos servicios es una persona ni sustituye ayuda profesional. No uses dirección, salud o secretos reales para probar la memoria."]],
      verdict: "Si quieres crear un reparto ficticio y conectarlo con chat, imágenes y vídeo, empieza por OurDream AI. Si buscas conversación continuada con un solo amigo virtual, Replika responde mejor a esa pregunta. Comprueba precios actuales, privacidad y cancelación antes de decidir."
    }
  },
  "pt-br": {
    "candy-ai": {
      title: "OurDream AI vs Candy AI: encontrar ou criar um personagem",
      description: "Compare Discover, Shorts, criação própria, chat, imagens, vídeo, dreamcoins e privacidade nos dois serviços.",
      intro: "As duas plataformas permitem descobrir personagens e montar o seu próprio. Dizer que o Candy AI é só um catálogo e que apenas o OurDream AI oferece criação seria incorreto. A comparação útil acompanha a ideia inicial até a conversa e a mídia que você realmente pretende usar.",
      dimensions: [["Primeiro acesso", "Descrição curta ou busca de personagens", "Discover, Shorts e criador próprio"], ["Continuidade", "Chat conectado a imagens, vídeo e voz", "Confira quais formatos o plano libera"], ["Gasto", "Modelos e dreamcoins separados", "Mensagens, chamadas e gerações atuais"]],
      sections: [["Teste busca e criação em rodadas diferentes", "Invente uma curadora fictícia claramente adulta com uma exposição para organizar. Procure perfis parecidos nas duas plataformas; depois crie a mesma pessoa usando uma ficha curta. Registre o tempo até começar e quais traços são editáveis depois. Rapidez de descoberta e liberdade de criação não são a mesma nota."], ["Leve a conversa a duas cenas", "Converse sobre um museu imaginário, mude de assunto e depois pergunte sobre um detalhe do plano. Se puder gerar imagens, mostre a personagem de dia e à noite. Conte quantas tentativas foram descartadas. Essa é uma metodologia para o leitor, não um resultado que nossa equipe mediu."], ["Plano, créditos e privacidade", "A ajuda do OurDream distingue chats comuns e dreamcoins usados em certos modelos e recursos de mídia. Confira no checkout do Candy AI os limites atuais para mensagens, chamadas e gerações. Leia as regras de histórico, compartilhamento e exclusão; não use fotos de pessoas reais ou segredos como material de teste."]],
      verdict: "O OurDream AI merece prioridade se você quer construir uma personagem e levar a história do chat para mídia visual. O Candy AI pode agradar mais se Discover e Shorts facilitarem encontrar alguém interessante. Decida após contar novas tentativas, permissões e custo real."
    },
    "crushon-ai": {
      title: "OurDream AI vs CrushOn AI: estúdio de personagens ou roleplay comunitário",
      description: "Compare autoria dos personagens, modelos, memória, mídia, acesso pago e proteção de dados.",
      intro: "O CrushOn AI destaca personagens da comunidade, roleplay prolongado e escolha de modelos. O OurDream AI conecta desenho da personagem, chat e produção visual. Primeiro decida se você pretende escrever uma longa história ou representar a mesma figura também em imagens e vídeos.",
      dimensions: [["Origem", "Separe personagens públicos e próprios", "Verifique criador e visibilidade no catálogo"], ["Memória", "Teste o modelo de conversa escolhido", "Diferencie memória salva de contexto recente"], ["Custo", "Conte dreamcoins de modelo e mídia", "Confira modelos gratuitos e opções avançadas"]],
      sections: [["Não misture catálogo e editor", "Ao escolher um personagem público no CrushOn, leia quem o criou, o cenário e as regras de compartilhamento. Faça o mesmo no OurDream. Depois avalie a criação com uma pessoa adulta fictícia descrita de modo idêntico nos dois produtos. Um catálogo vasto não prova melhor controle de criação."], ["Memória tem mecanismos diferentes", "A documentação do CrushOn separa lembranças salvas do contexto imediato. Introduza três fatos inocentes sobre uma cidade inventada e pergunte novamente após trocar de assunto. Anote o modelo, o plano e se você usou um comando de salvar memória. Contexto maior, por si só, não garante recuperação útil."], ["Mídia e limites reais", "No OurDream avalie imagens, vídeos e voz apenas se isso fizer parte da sua tarefa. No CrushOn concentre-se na escolha do modelo e na continuidade do texto. Compare o preço completo e leia políticas atuais antes de fornecer informações; personagens públicos não são cofres para segredos pessoais."]],
      verdict: "Se seu interesse principal é escolher personagens da comunidade e modelos para roleplay longo, o CrushOn AI é candidato direto. Se você quer projetar um personagem e estendê-lo ao chat, imagem e vídeo, comece pelo OurDream AI. Faça seu próprio teste de memória em condições comparáveis."
    },
    lovescape: {
      title: "OurDream AI vs Lovescape: do retrato a um vídeo aproveitável",
      description: "Uma comparação de criação de personagem, consistência visual, imagem para vídeo, dreamcoins, Chips e direitos.",
      intro: "O Lovescape também reúne personalização, chat, geração de imagem e ferramentas de vídeo em evolução. Reduzi-lo a uma experiência de relacionamento esconderia a semelhança com o OurDream AI: ambos podem ser usados como fluxo criativo. O teste importante é o trabalho total até uma cena pronta.",
      dimensions: [["Imagem→vídeo", "Confira modelos e formatos de geração", "Comece por uma imagem feita no próprio Lovescape"], ["Consistência", "Preserve identidade em cenas distintas", "Veja se a pessoa continua reconhecível no movimento"], ["Gastos", "Dreamcoins por ação", "Assinatura e Chips em linhas separadas"]],
      sections: [["Um projeto, todas as etapas", "Defina um adulto fictício, faça uma conversa curta, gere um retrato e uma cena em outro local e então tente animar uma imagem, caso o plano permita. Em cada etapa registre ajustes, resultados descartados e tempo até algo utilizável. Um clipe de propaganda de um lado e a primeira tentativa do outro não formam comparação justa."], ["De onde vem a imagem de partida", "O tutorial oficial do Lovescape descreve vídeo a partir de imagens produzidas dentro da plataforma, não o envio livre de qualquer arquivo externo. Isso importa para quem já possui imagens autorizadas em outro lugar. Confirme também as entradas permitidas pelo modelo do OurDream que você pretende usar."], ["Custo de um resultado útil", "O Lovescape pode cobrar Chips além da assinatura; o OurDream relaciona usos de dreamcoins na ajuda. Some regenerações, extensão do clipe, download e permissões de publicação. Use somente personagens fictícios e materiais autorizados; nenhuma ferramenta legitima copiar o rosto de alguém sem consentimento."]],
      verdict: "O OurDream AI vale teste se você alterna personagens, modelos de chat e formatos visuais. O Lovescape merece atenção se sua tarefa central é transformar uma imagem criada ali em vídeo. Compare resultados utilizáveis, direitos e custo total, não apenas a mensalidade."
    },
    girlfriendgpt: {
      title: "OurDream AI vs GirlfriendGPT: personagens de criadores ou mundos próprios",
      description: "Compare descoberta, criação de perfis, roleplay, imagens, créditos, publicação e direitos em ambos os serviços.",
      intro: "Os termos do GirlfriendGPT mencionam personagens publicados por usuários e personagens criados por você, além de chat e imagens. O OurDream AI também tem descoberta e criação, mas acrescenta um percurso mais amplo com voz e vídeo. Avalie catálogo e editor separadamente.",
      dimensions: [["Perfis públicos", "Confira origem e visibilidade", "Confira criador e permissões"], ["Criação própria", "Aparência, voz e história", "Perfil e mensagem de abertura"], ["Mídia", "Imagem, vídeo, voz e dreamcoins", "Imagem e créditos do plano"]],
      sections: [["Faça duas rodadas", "Primeiro encontre personagens públicos de um gênero parecido e observe como cada serviço mostra a autoria. Em seguida crie uma pessoa fictícia adulta com a mesma meta e o mesmo tom. A facilidade de usar um perfil pronto não mede a qualidade do editor de personagens."], ["Conversa, imagens e limites", "Mantenha uma cena inocente por vários turnos e depois pergunte por um detalhe anterior. Para imagens, mude iluminação e cenário e conte os reprocessamentos. Se vídeo fizer parte da sua necessidade, verifique a oferta atual do GirlfriendGPT em vez de presumir que ela equivale à do OurDream."], ["Direitos e cobranças", "Os termos do GirlfriendGPT tratam das contribuições de usuários e de créditos extras. Antes de reutilizar personagem de outra pessoa, leia as condições de autoria. O OurDream separa assinatura de dreamcoins. Confira também privacidade e exclusão sem enviar rosto real não autorizado."]],
      verdict: "O GirlfriendGPT é candidato se você gosta de descobrir muitas ideias publicadas por criadores. O OurDream AI pode atender melhor quem projeta uma personagem específica e quer conectá-la a chat, voz, imagem e vídeo. Planos e permissões atuais podem mudar o resultado."
    },
    replika: {
      title: "OurDream AI vs Replika: um estúdio de histórias ou um amigo virtual",
      description: "Compare vários personagens, conversa contínua, funções visuais, cancelamento de assinatura e dados pessoais.",
      intro: "O OurDream AI funciona como espaço para montar personagens e cenas fictícias. A ajuda oficial da Replika descreve um companheiro pessoal que evolui com a conversa. O critério principal não é qual resposta inicial parece mais carinhosa, e sim qual atividade você pretende repetir.",
      dimensions: [["Objetivo", "Elenco de personagens e produção visual", "Uma relação contínua com a mesma IA"], ["Memória", "Coerência de perfil e história", "Uso de detalhes em conversas posteriores"], ["Dinheiro e dados", "Dreamcoins e mídia", "Plano, canal de compra e privacidade"]],
      sections: [["Experimentos com propósito diferente", "No OurDream crie uma pessoa claramente adulta e fictícia que organiza uma exposição imaginária. Na Replika escolha o tipo de relação que você realmente usaria e mencione uma preferência igualmente inventada. Retorne depois e pergunte pelos detalhes sem sugerir a resposta. Tom afetuoso não equivale a lembrança confiável."], ["Produção versus continuidade", "No OurDream conte imagens e vídeos em que a personagem continua reconhecível e quanto custaram as tentativas. Na Replika observe como é retomar a conversa com o mesmo companheiro e quais dados podem ser editados ou excluídos. Cobrar da Replika um estúdio de vídeo seria escolher o critério errado."], ["Assinatura e limites emocionais", "A mídia no OurDream pode exigir dreamcoins. A documentação da Replika diferencia assinatura e canal de compra; apagar o aplicativo não necessariamente cancela a cobrança. Nenhuma IA substitui amigos, pessoas de confiança ou ajuda profissional. Não use endereço ou saúde para testar memória."]],
      verdict: "Quer criar várias figuras e conectá-las a chat, imagens e vídeo? Comece pelo OurDream AI. Quer manter uma conversa com o mesmo amigo virtual? A Replika responde melhor a essa intenção. Confira preço, exclusão de dados e cancelamento antes de assumir compromisso."
    }
  },
  ru: {
    "candy-ai": {
      title: "OurDream AI vs Candy AI: поиск или создание персонажа",
      description: "Сопоставляем Discover, Shorts, создание героев, беседу, изображения, видео, затраты и приватность.",
      intro: "Оба сервиса позволяют и находить персонажей, и делать своих. Нельзя честно представить Candy AI только каталогом, а OurDream AI — единственным конструктором. Сравнение начинается с того, как идея превращается в разговор и узнаваемую сцену.",
      dimensions: [["Вход", "Короткое описание или поиск героя", "Discover, Shorts и собственный персонаж"], ["Продолжение", "Чат, изображения, видео и голос", "Проверьте доступные форматы в своём тарифе"], ["Расходы", "Модели и Dreamcoins отдельно", "Сообщения, звонки и генерации по текущему плану"]],
      sections: [["Два способа начать", "Придумайте явно совершеннолетнюю вымышленную кураторку выставки. Сначала найдите похожий публичный образ в обоих сервисах, затем создайте свою версию из одного и того же описания. Отдельно оцените время поиска и возможность править характер и внешность. Это разные удобства."], ["Сцена после разговора", "Обсудите воображаемое открытие музея, смените тему и вернитесь к первоначальному плану. Если можно создавать изображения, поместите героиню в дневную и ночную обстановку. Записывайте число неудачных попыток, а не только лучший кадр. Мы предлагаем метод читателю, а не выдаём его за проведённый нами тест."], ["Подписка и данные", "Справка OurDream отделяет обычный чат от некоторых моделей и медиа, потребляющих Dreamcoins. У Candy AI уточните действующие ограничения на звонки, картинки и клипы в текущем интерфейсе. До ввода личной информации прочитайте правила истории и удаления: реальное лицо или секрет для проверки не нужны."]],
      verdict: "Для разработки собственного героя и визуальной истории начните с OurDream AI. Если вам важен быстрый поиск персонажей в Discover и Shorts, попробуйте Candy AI. Финальное решение зависит от затрат на повторные генерации и правил использования материалов."
    },
    "crushon-ai": {
      title: "OurDream AI vs CrushOn AI: студия персонажей или сообщество ролевых историй",
      description: "Разбираем происхождение персонажей, модели, память, визуальные инструменты, подписки и приватность.",
      intro: "CrushOn AI делает упор на персонажей сообщества, длительный ролеплей и выбор языковых моделей. OurDream AI объединяет конструирование героя с перепиской и созданием медиа. Сначала определите, что важнее: длинный текстовый сюжет или сохранение героя в изображениях и видео.",
      dimensions: [["Источник героя", "Разделите общедоступных и собственных", "Посмотрите автора и настройки публикации"], ["Память", "Проверяйте выбранную модель", "Отличайте сохранённое воспоминание от контекста"], ["Стоимость", "Dreamcoins на модели и медиа", "Условия бесплатных и старших моделей"]],
      sections: [["Каталог и редактор — разные тесты", "При выборе героя CrushOn посмотрите автора, сценарий и правила распространения. То же сделайте для публичных персонажей OurDream. Для сравнения конструкторов придумайте одинаковую явно взрослую вымышленную биографию. Большая библиотека не доказывает более гибкий редактор."], ["Почему память нельзя свести к числу токенов", "Документация CrushOn описывает сохранённые воспоминания отдельно от ближайшего контекста. Назовите несколько безопасных фактов о несуществующем городе, поговорите о другом и затем спросите прямо. Запишите модель, тариф и применяли ли сохранение памяти. Длинное заявленное окно само по себе не гарантирует естественного воспоминания."], ["Медиа, оплата и личные сведения", "В OurDream подсчитайте Dreamcoins на изображения, видео и голос, только если они нужны вашей задаче. В CrushOn уточните условия моделей и памяти. Не вносите реальные секреты в публичные карточки персонажей и проверьте действующие политики обеих платформ."]],
      verdict: "CrushOn AI уместнее при интересе к множеству авторских персонажей и выбору модели для долгого ролеплея. OurDream AI — если вы конструируете своего героя для чата и визуальных сцен. О качестве памяти можно судить лишь по сопоставимой личной проверке."
    },
    lovescape: {
      title: "OurDream AI vs Lovescape: путь от героя к короткому видео",
      description: "Сравнение настройки героя, перехода от картинки к ролику, Dreamcoins и Chips, входных файлов и прав.",
      intro: "Lovescape тоже сочетает персонажей, беседу, изображения и развивающиеся видеовозможности. Описывать его лишь как приложение для романтического чата было бы неточно. Здесь важно, сколько шагов и денег требуется для одной готовой сцены с узнаваемым вымышленным взрослым героем.",
      dimensions: [["Изображение→видео", "Уточните доступные модели и форматы", "Исходная картинка создаётся внутри Lovescape"], ["Последовательность", "Внешность между разными сценами", "Сохранение образа при движении"], ["Оплата", "Dreamcoins по действиям", "Подписка и Chips отдельно"]],
      sections: [["Проведите проект до конца", "Создайте вымышленного взрослого персонажа, коротко поговорите, сделайте портрет и второй фон, а затем попробуйте оживить изображение. На каждом этапе считайте изменения описания и отброшенные результаты. Сравнение рекламного ролика одного сервиса с первой попыткой другого бессмысленно."], ["Можно ли внести своё изображение", "Официальное руководство Lovescape описывает видео из картинок, созданных внутри платформы, а не произвольную загрузку внешних файлов. Для автора со своей законной библиотекой это существенная граница. В OurDream также проверьте ввод и доступность конкретной модели в текущем аккаунте."], ["Реальная цена и права", "Функции Lovescape могут расходовать Chips сверх подписки; OurDream указывает назначения Dreamcoins в справке. Включите в смету повторы, удлинение видео, выгрузку и права публикации. Не используйте ничьи реальные лицо или голос без необходимых разрешений."]],
      verdict: "OurDream AI стоит проверить для работы с разными героями, моделями и видами медиа. Lovescape — если главный процесс начинается с изображения, созданного там же, и заканчивается клипом. Выбирайте по числу пригодных результатов, правам и общей стоимости."
    },
    girlfriendgpt: {
      title: "OurDream AI vs GirlfriendGPT: каталог авторов и собственный персонаж",
      description: "Сравниваем поиск персонажей, настройку профиля, беседу, изображения, публикацию, кредиты и права.",
      intro: "Условия GirlfriendGPT говорят как о персонажах пользователей, так и о собственном конструкторе, беседе и генерации картинок. OurDream AI тоже даёт выбирать и создавать героев, а также развивать историю голосом и видео. Каталог и возможности собственного дизайна нельзя оценивать одной цифрой.",
      dimensions: [["Публичные герои", "Проверьте источник и видимость", "Уточните автора и условия использования"], ["Свой персонаж", "Внешность, голос, история", "Профиль и первое сообщение"], ["Медиа", "Картинки, видео, голос и Dreamcoins", "Изображения и кредиты по плану"]],
      sections: [["Сначала поиск, затем создание", "Найдите в обоих сервисах героев одного жанра и посмотрите, кто указан автором. После этого создайте одного явно взрослого вымышленного персонажа с общей целью и манерой речи. Удобный каталог не равен глубокому редактору, поэтому результаты записывайте раздельно."], ["Не решайте по первой реплике", "Продолжите безопасную выдуманную историю на несколько ходов и спросите о раннем факте. Для двух изображений измените свет и окружение, записав повторные попытки. Если вам обязательно нужно видео, проверьте его фактическую доступность в GirlfriendGPT, а не предполагайте равенство с OurDream."], ["Права автора и стоимость", "Условия GirlfriendGPT описывают пользовательские публикации и дополнительные кредиты. Перед использованием чужого героя прочитайте ограничения и указание автора. В OurDream отделяйте подписку от Dreamcoins. Ни один вариант не разрешает без согласия брать фотографию реального человека."]],
      verdict: "GirlfriendGPT стоит рассмотреть тем, кто ищет множество идей от других авторов. OurDream AI подходит для самостоятельной разработки героя и его продолжения в чате, изображениях, голосе и видео. Решение зависит от нынешних условий доступа и публикации."
    },
    replika: {
      title: "OurDream AI vs Replika: мастерская историй или один ИИ-друг",
      description: "Различия между множеством персонажей и постоянным собеседником: память, изображения, подписка и приватность.",
      intro: "OurDream AI помогает придумывать разных вымышленных героев и сцены. Официальная справка Replika говорит об одном личном ИИ-компаньоне, который меняется по ходу отношений. Сравнение по тому, кто ласковее в первой реплике, не отвечает главному вопросу: чем вы хотите заниматься регулярно?",
      dimensions: [["Цель", "Создавать героев и визуальные сюжеты", "Продолжать общение с одним компаньоном"], ["Память", "Согласованность профиля и сцен", "Как учитываются прошлые беседы"], ["Цена и данные", "Dreamcoins и медиа", "Тариф, канал оплаты, хранение сведений"]],
      sections: [["Разные задачи — разные проверки", "В OurDream придумайте явно взрослого героя, который готовит несуществующую выставку. В Replika выберите нужный вам формат отношений и сообщите другое выдуманное предпочтение. Вернитесь позже и спросите точно, не подсказывая ответ. Тёплая интонация сама по себе не свидетельствует о памяти."], ["Производство и постоянство", "Для OurDream проверьте, сохраняется ли герой на двух изображениях и в коротком видео, считая повторы. Для Replika важнее удобство возвращения к тому же собеседнику и возможность исправить или удалить сохранённые сведения. Оценивать её как видеостудию несправедливо."], ["Оплата и эмоциональные границы", "Медиапроекты OurDream могут расходовать Dreamcoins. Подписки Replika и отмена зависят от способа покупки; удаление приложения не обязательно останавливает платежи. Оба собеседника — ИИ, а не замена человеку или специалисту. Не проверяйте память адресом или медицинскими данными."]],
      verdict: "Для набора вымышленных персонажей, чатов, изображений и клипов начните с OurDream AI. Если нужна продолжающаяся беседа с одним ИИ-другом, попробуйте Replika. Проверяйте реальные расходы и возможность удаления данных до подписки."
    }
  },
  de: {
    "candy-ai": {
      title: "OurDream AI vs Candy AI: Figuren entdecken oder selbst gestalten?",
      description: "Vergleich von Discover, Shorts, Figureneditor, Chat, Bildern, Video, Zusatzkosten und Datenschutz.",
      intro: "Auf beiden Plattformen kann man Figuren entdecken und eigene anlegen. Candy AI bloß als Katalog und OurDream AI als einzigen Figurenbaukasten darzustellen, wäre falsch. Entscheidend ist der Weg von der Idee über ein Gespräch zu einer Szene, die Sie tatsächlich verwenden möchten.",
      dimensions: [["Einstieg", "Kurze Beschreibung oder Figurensuche", "Discover, Shorts und eigene Figuren"], ["Weiterführung", "Chat mit Bild, Video und Stimme verbunden", "Medienzugang im aktuellen Tarif prüfen"], ["Ausgaben", "Modelle und Dreamcoins getrennt", "Nachrichten, Anrufe und Generierungen prüfen"]],
      sections: [["Suche und Eigenbau getrennt prüfen", "Erfinden Sie eine eindeutig erwachsene Kuratorin mit dem fiktiven Ziel, eine Ausstellung zu eröffnen. Suchen Sie erst eine ähnliche veröffentlichte Figur auf beiden Plattformen und gestalten Sie dann mit demselben Briefing eine eigene. Notieren Sie Suchaufwand und spätere Bearbeitungsmöglichkeiten. Das sind zwei verschiedene Qualitäten."], ["Vom Gespräch zu zwei Bildern", "Lassen Sie die Figur über ein erfundenes Museum sprechen, wechseln Sie das Thema und fragen Sie später nach einer konkreten Abmachung. Erstellen Sie bei verfügbarem Zugang eine Tages- und Nachtszene. Zählen Sie verworfene Bilder mit; der schönste Einzelshot allein ist kein Vergleich. Dies ist eine Methode für Leser, kein vorgetäuschter Redaktionstest."], ["Tarif und Privatsphäre", "OurDreams Hilfe trennt Standardchat von Dreamcoins für bestimmte Modelle und Medien. Bei Candy AI sind die aktuellen Rechte für Anrufe, Bilder und Videos im Checkout zu prüfen. Lesen Sie bei beiden die Regeln für Gesprächsverläufe, Veröffentlichung und Löschung. Reale Gesichter oder Geheimnisse sind keine Testdaten."]],
      verdict: "OurDream AI sollten Sie testen, wenn eine selbst gestaltete Figur vom Chat zur visuellen Geschichte wachsen soll. Candy AI kann attraktiver sein, wenn Sie über Discover und Shorts schneller passende Figuren finden. Rechnen Sie Wiederholungen, Rechte und Gesamtkosten ein."
    },
    "crushon-ai": {
      title: "OurDream AI vs CrushOn AI: Figurenwerkstatt oder Community-Rollenspiel?",
      description: "Vergleich von Figurenherkunft, Modellwahl, Erinnerung, visuellen Werkzeugen, Bezahlschranken und Privatsphäre.",
      intro: "CrushOn AI betont Community-Figuren, lange Rollenspiele und die Wahl des Gesprächsmodells. OurDream AI verbindet die eigene Figur mit Chat und visueller Produktion. Ob Sie hauptsächlich schreiben oder denselben Charakter auch in Bildern und Videos sehen wollen, bestimmt die faire Vergleichsfrage.",
      dimensions: [["Herkunft", "Öffentliche und eigene Figuren trennen", "Creator und Freigabe einer Community-Figur prüfen"], ["Erinnerung", "Mit gewähltem Modell selbst untersuchen", "Gespeicherte Erinnerung von aktuellem Kontext trennen"], ["Kosten", "Dreamcoins für Modell und Medien", "Freie und höherwertige Modelle prüfen"]],
      sections: [["Katalog und Editor sind verschiedene Aufgaben", "Lesen Sie beim öffentlichen CrushOn-Charakter Autorenschaft, Hintergrund und Freigabe. Verfahren Sie ebenso bei OurDream. Für den Editorvergleich geben Sie beiden eine identische Biografie einer eindeutig erwachsenen erfundenen Person. Eine große Bibliothek belegt keinen besseren Figurenbaukasten."], ["Ein Kontextfenster ist kein Gedächtnistest", "CrushOns Dokumentation beschreibt speicherbare Erinnerungen getrennt vom unmittelbaren Gesprächskontext. Pflanzen Sie drei harmlose Fakten über eine erfundene Stadt, reden Sie über etwas anderes und fragen Sie später gezielt danach. Halten Sie Modell, Tarif und einen etwaigen Speicherschritt fest. Eine beworbene Kontextgröße beweist noch keine gelungene Verwendung alter Fakten."], ["Medien nur nach Bedarf bewerten", "Wenn Sie Bild, Video und Sprache brauchen, prüfen Sie OurDreams tatsächliche Freischaltung und Dreamcoin-Kosten. Bei CrushOn zählen vor allem Figurenvielfalt, Modellsteuerung und Fortsetzung langer Chats. Nutzen Sie keine privaten Daten in öffentlichen Figuren und lesen Sie die aktuellen Datenschutzregeln."]],
      verdict: "Für verschiedene Community-Figuren und steuerbare Modelle in langen Rollenspielen ist CrushOn AI ein direkter Kandidat. Für eine selbst gebaute Figur in Chat, Bild und Video liegt OurDream AI näher. Gedächtnisqualität lässt sich nur unter vergleichbaren Bedingungen selbst beurteilen."
    },
    lovescape: {
      title: "OurDream AI vs Lovescape: von der Figur zum brauchbaren Video",
      description: "Figurengestaltung, Bild-zu-Video-Ablauf, Konsistenz, Dreamcoins, Chips, Eingaben und Medienrechte im Vergleich.",
      intro: "Lovescape nennt ebenfalls Figurenbau, Chat, Bilder und sich entwickelnde Videofunktionen. Es auf romantische Unterhaltung zu verkürzen, würde die zentrale Überschneidung mit OurDream AI übersehen. Prüfen Sie den gesamten Produktionsweg bis zu einem erkennbaren fiktiven Erwachsenen in einem brauchbaren Clip.",
      dimensions: [["Bild→Video", "Aktuelle Modelle und Ausgabeformate prüfen", "Start mit einem intern erzeugten Lovescape-Bild"], ["Identität", "Gesicht und Merkmale in zwei Szenen", "Wiedererkennbarkeit beim Animieren"], ["Zusatzkosten", "Dreamcoins je Aktion", "Mitgliedschaft und Chips getrennt"]],
      sections: [["Ein Projekt durch alle Stufen führen", "Beschreiben Sie eine erwachsene erfundene Figur, führen Sie einen kurzen Dialog, erzeugen Sie ein Porträt und eine zweite Umgebung und animieren Sie nach Möglichkeit ein Bild. Notieren Sie an jeder Stufe Nachbesserungen, verworfene Ergebnisse und benötigte Zeit. Ein Werbeclip gegen den Erstversuch des Konkurrenten wäre kein fairer Vergleich."], ["Woher darf das Ausgangsbild kommen?", "Lovescapes offizielle Videoanleitung nutzt ein innerhalb des Dienstes erzeugtes Bild und beschreibt keine freie Einfuhr beliebiger externer Dateien. Für eine bereits vorhandene rechtmäßige Bildsammlung ist das bedeutsam. Prüfen Sie auch bei OurDream die Eingaberegeln des konkret verfügbaren Modells."], ["Preis pro verwendbarem Ergebnis", "Lovescape verlangt für bestimmte Aktionen Chips zusätzlich zur Mitgliedschaft; OurDream dokumentiert Dreamcoin-Verbrauch. Rechnen Sie Wiederholungen, Verlängerungen, Speichern und Veröffentlichungsrechte ein. Beide Angebote erlauben nicht automatisch die Nachahmung realer Personen ohne deren Zustimmung."]],
      verdict: "OurDream AI passt als Testkandidat zu mehreren Figuren und wechselnden Chat- und Medienmodellen. Lovescape ist interessant, wenn Ihr Kernprojekt ein intern erstelltes Bild in ein Video überführt. Maßgeblich sind nutzbare Ergebnisse, Rechte und Gesamtausgaben."
    },
    girlfriendgpt: {
      title: "OurDream AI vs GirlfriendGPT: Creator-Figuren oder eigene Bildwelten?",
      description: "Vergleich von öffentlichen Figuren, Eigenkreation, Rollenspiel, Bildern, Credits, Veröffentlichung und Rechten.",
      intro: "GirlfriendGPTs offizielle Bedingungen beschreiben von Nutzern erstellte und selbst gestaltete Figuren, Chat und Bilder. OurDream AI erlaubt ebenfalls Entdeckung und Eigenkreation, führt die Figur aber auch in Stimme und Video weiter. Katalog und Gestaltungsfreiheit sollten getrennt beurteilt werden.",
      dimensions: [["Öffentliche Figuren", "Herkunft und Sichtbarkeit prüfen", "Creator und Nutzungsrechte prüfen"], ["Eigene Figur", "Aussehen, Stimme und Hintergrund", "Profil und Gesprächsauftakt"], ["Medien", "Bild, Video, Stimme und Dreamcoins", "Bilder und aktuelle Credits"]],
      sections: [["Zwei Testläufe statt einer Punktzahl", "Suchen Sie zuerst auf beiden Plattformen öffentliche Figuren aus einem ähnlichen Genre und lesen Sie die Creator-Angaben. Legen Sie dann eine eindeutig erwachsene fiktive Person mit derselben Aufgabe und Stimme neu an. Bequemes Stöbern und flexible Eigenkreation sind verschiedene Leistungen."], ["Gespräch und zwei Ansichten", "Führen Sie eine harmlose Szene über mehrere Nachrichten fort und fragen Sie später nach einem anfänglichen Detail. Bei zwei Bildern wechseln Sie Beleuchtung und Ort und zählen Wiederholungen. Falls Video wichtig ist, prüfen Sie seine gegenwärtige Verfügbarkeit bei GirlfriendGPT, statt Parität zu unterstellen."], ["Urheber und Abrechnung", "GirlfriendGPTs Bedingungen behandeln Nutzerbeiträge und zusätzliche Credits. Klären Sie die Rechte, bevor Sie eine fremde Figur weiterverwenden oder veröffentlichen. Bei OurDream müssen Mitgliedschaft und Dreamcoins getrennt betrachtet werden. Echte Gesichter ohne Erlaubnis gehören in keinen Versuch."]],
      verdict: "Wer viele von anderen Creatorn verfasste Figuren erkunden will, sollte GirlfriendGPT näher ansehen. Für eine selbst entworfene Figur, die in Chat, Stimme, Bild und Video auftreten soll, bietet OurDream AI den passendere Test. Aktuelle Rechte und Tarifgrenzen können das Urteil ändern."
    },
    replika: {
      title: "OurDream AI vs Replika: Geschichtenatelier oder ein KI-Freund?",
      description: "Mehrere Figuren und Medien bei OurDream AI gegenüber dauerhafter Beziehung, Abo und Datenverarbeitung bei Replika.",
      intro: "OurDream AI dient eher der Erfindung mehrerer Charaktere und Szenen. Replika beschreibt sich in seiner offiziellen Hilfe als persönlicher Begleiter, der über Gespräche hinweg entsteht. Nicht die freundlichere erste Antwort, sondern die wiederkehrende Tätigkeit sollte über Ihre Wahl entscheiden.",
      dimensions: [["Ziel", "Figuren und visuelle Erzählungen schaffen", "Mit demselben KI-Gegenüber weiterreden"], ["Erinnerung", "Profil und Handlung stimmen überein", "Umgang mit Informationen über längere Zeit"], ["Geld und Daten", "Dreamcoins und Medien", "Abostufe, Kaufweg und Privatsphäre"]],
      sections: [["Den Versuch an den Zweck anpassen", "Erstellen Sie bei OurDream eine erwachsene erfundene Person, die eine imaginäre Ausstellung organisiert. Wählen Sie bei Replika den gewünschten Beziehungsmodus und nennen Sie eine andere harmlose fiktive Vorliebe. Fragen Sie später gezielt nach, ohne die Antwort vorzugeben. Zuneigung im Ton ist kein Beweis für Erinnerung."], ["Produktion oder Beständigkeit", "Bei OurDream zählen Wiedererkennbarkeit in zwei Bildern und einem kurzen Clip samt Wiederholungen. Bei Replika zählen das Wiederaufnehmen eines Gesprächs mit derselben Figur und die Kontrolle über gespeicherte Angaben. Es wie ein Videostudio zu benoten, verfehlt seinen Zweck."], ["Abo und emotionale Grenzen", "OurDream-Medien können Dreamcoins verbrauchen. Bei Replika hängen Kündigung und Verwaltung vom gekauften Tarif und Kanal ab; das Löschen der App beendet nicht unbedingt die Zahlung. Keine KI ersetzt menschliche Beziehungen oder professionelle Hilfe. Verwenden Sie keine Anschrift oder Gesundheitsdaten als Gedächtnisprobe."]],
      verdict: "Für mehrere fiktive Figuren und zusammenhängende Chats, Bilder und Videos testen Sie zuerst OurDream AI. Für einen dauerhaft gleichen KI-Freund ist Replika der direktere Kandidat. Prüfen Sie aktuelle Kosten, Löschmöglichkeiten und Kündigung vor der Bindung."
    }
  },
  fr: {
    "candy-ai": {
      title: "OurDream AI vs Candy AI : découvrir un personnage ou le façonner ?",
      description: "Comparer la découverte, la création, les conversations, les images, les vidéos, les frais supplémentaires et la confidentialité.",
      intro: "Les deux services permettent de découvrir des personnages et d'en créer. Candy AI ne se résume pas à un catalogue, pas plus qu'OurDream AI à un éditeur. La vraie question est de savoir comment une idée devient un échange puis une scène exploitable.",
      dimensions: [["Point de départ", "Description libre ou personnage public", "Discover, Shorts ou création personnelle"], ["Suite de l'histoire", "Chat, images, vidéo et voix", "Accès aux médias selon l'offre en cours"], ["Dépenses", "Modèles et Dreamcoins à distinguer", "Messages, appels et générations à vérifier"]],
      sections: [["Comparer deux parcours, pas deux vitrines", "Imaginez une conservatrice fictive explicitement adulte préparant une exposition. Cherchez d'abord un personnage proche sur chaque plateforme, puis créez le vôtre à partir du même portrait écrit. Notez séparément le temps de découverte et la marge de modification. Une sélection abondante ne prouve pas la souplesse de l'éditeur."], ["Faire durer la même scène", "Parlez d'un musée imaginaire, changez de sujet, puis demandez ce qui avait été décidé au départ. Si les images sont accessibles, essayez deux éclairages et comptez les reprises nécessaires pour retrouver le même visage. C'est un protocole proposé au lecteur, pas un résultat de test que nous prétendrions avoir mené."], ["Compter au-delà de l'abonnement", "L'aide d'OurDream distingue le chat courant des modèles et médias qui consomment des Dreamcoins. Chez Candy AI, vérifiez les droits actuels pour les appels, images et clips avant de payer. Comparez aussi l'historique, les réglages de publication et l'effacement des données, sans importer de visage réel ni de secret."]],
      verdict: "OurDream AI mérite l'essai si vous construisez un personnage à prolonger en images et vidéo. Candy AI peut mieux convenir à une découverte rapide via Discover et Shorts. Le coût des essais ratés et les droits sur les contenus peuvent départager les deux."
    },
    "crushon-ai": {
      title: "OurDream AI vs CrushOn AI : studio de personnages ou jeu de rôle communautaire ?",
      description: "Comparer les personnages publics, les modèles, la mémoire, les médias, les abonnements et la protection des données.",
      intro: "CrushOn AI met en avant les personnages de sa communauté, les échanges de rôle prolongés et le choix de modèle. OurDream AI relie conception d'un personnage, chat et création visuelle. La comparaison change selon que vous privilégiez un long récit écrit ou sa continuité en images.",
      dimensions: [["Origine", "Distinguer création privée et profil public", "Vérifier auteur et diffusion communautaire"], ["Mémoire", "Tester avec le modèle effectivement choisi", "Distinguer souvenir enregistré et contexte proche"], ["Budget", "Dreamcoins pour certains modèles et médias", "Conditions des modèles gratuits ou avancés"]],
      sections: [["Séparer bibliothèque et atelier", "Sur CrushOn, lisez le nom du créateur et les paramètres d'une fiche publique. Faites de même sur OurDream. Pour juger les outils de création, utilisez la même biographie fictive d'un adulte et le même objectif de scène. Une grande bibliothèque n'est pas, à elle seule, un meilleur éditeur."], ["La mémoire ne se mesure pas qu'en jetons", "La documentation de CrushOn décrit des souvenirs sauvegardés distincts du contexte immédiat. Introduisez trois faits anodins sur une ville inventée, passez à un autre sujet puis interrogez le personnage. Notez modèle, formule et éventuelle opération d'enregistrement. Une fenêtre de contexte annoncée ne garantit pas un rappel naturel."], ["Payer seulement pour ce qui compte", "Si vous créez images, vidéos ou voix, mesurez dans OurDream les Dreamcoins réellement nécessaires. Pour CrushOn, regardez plutôt la variété des auteurs, les réglages des modèles et la poursuite d'une histoire. N'inscrivez aucune donnée privée dans un personnage public et consultez les règles actuelles des deux services."]],
      verdict: "CrushOn AI est un choix à examiner pour explorer des auteurs et choisir son modèle de jeu de rôle. OurDream AI correspond davantage à un personnage conçu pour le chat puis les scènes visuelles. Seul un essai comparable peut départager leur mémoire."
    },
    lovescape: {
      title: "OurDream AI vs Lovescape : du portrait à la vidéo utilisable",
      description: "Comparer création de personnages, chaîne image-vidéo, cohérence, Dreamcoins, Chips, fichiers d'entrée et droits.",
      intro: "Lovescape propose lui aussi personnages, chat, images et outils vidéo en évolution. Le réduire à une simple application de conversation masquerait le vrai recoupement avec OurDream AI : le travail nécessaire pour faire apparaître le même adulte fictif dans un clip convaincant.",
      dimensions: [["Image vers vidéo", "Vérifier modèles et formats disponibles", "Partir d'une image créée dans Lovescape"], ["Cohérence", "Retrouver traits et style entre deux scènes", "Reconnaître le personnage en mouvement"], ["Coût", "Dreamcoins selon l'action", "Abonnement et Chips séparés"]],
      sections: [["Suivre une production entière", "Définissez un adulte fictif, engagez un bref dialogue, créez un portrait puis un autre décor, et animez une image si l'option est accessible. Relevez corrections, générations rejetées et temps passé à chaque étape. Une vidéo promotionnelle ne doit pas être opposée au premier essai de l'autre service."], ["Vérifier la provenance de l'image", "Le tutoriel officiel de Lovescape montre une vidéo obtenue à partir d'une image produite dans le service ; il ne démontre pas l'import libre de fichiers externes. Si vous possédez déjà des visuels dont vous avez les droits, cette limite importe. Contrôlez aussi les règles d'entrée du modèle OurDream actuellement disponible."], ["Prix par résultat conservé", "Certaines actions Lovescape utilisent des Chips en plus de l'abonnement ; OurDream explique l'usage des Dreamcoins. Incluez les reprises, prolongations, exportations et autorisations de publication dans votre calcul. N'imitez ni visage ni voix d'une personne réelle sans consentement approprié."]],
      verdict: "OurDream AI se prête à l'essai de plusieurs personnages et modèles de chat ou de média. Lovescape mérite l'attention si votre processus part d'une image créée chez lui pour aboutir à une vidéo. Comparez résultats conservables, droits et dépense totale."
    },
    girlfriendgpt: {
      title: "OurDream AI vs GirlfriendGPT : personnages de créateurs et création personnelle",
      description: "Comparer découverte, éditeur de profils, chat, images, crédits, publication et droits des créateurs.",
      intro: "Les conditions de GirlfriendGPT mentionnent à la fois des personnages publiés par les utilisateurs, des personnages personnels, le chat et les images. OurDream AI permet aussi de chercher et créer, avec un parcours vers la voix et la vidéo. La richesse du catalogue et celle des réglages demandent deux évaluations distinctes.",
      dimensions: [["Personnages publics", "Identifier origine et visibilité", "Lire auteur et autorisations"], ["Création", "Apparence, voix et histoire", "Profil et ouverture de conversation"], ["Médias", "Image, vidéo, voix et Dreamcoins", "Images et crédits selon l'offre"]],
      sections: [["Deux passages pour une même idée", "Commencez par chercher, des deux côtés, un personnage public d'un genre comparable et repérez son auteur. Créez ensuite votre propre adulte fictif avec un but et une façon de parler identiques. La facilité de parcourir une galerie ne mesure pas la précision de l'éditeur."], ["Regarder après la première réponse", "Poursuivez une scène anodine pendant plusieurs tours, puis demandez un détail donné au début. Pour les images, changez lieu et lumière en comptant les reprises. Si la vidéo vous est indispensable, vérifiez sa disponibilité actuelle chez GirlfriendGPT au lieu de supposer que les deux services sont équivalents."], ["Crédits et droits d'auteur", "Les conditions de GirlfriendGPT encadrent les contributions des utilisateurs et les crédits supplémentaires. Lisez-les avant de réutiliser un personnage publié par quelqu'un d'autre. Chez OurDream, distinguez abonnement et Dreamcoins. Aucun service ne vous donne automatiquement le droit d'employer l'image d'une personne réelle."]],
      verdict: "GirlfriendGPT convient à examiner si vous aimez parcourir des idées publiées par des créateurs. OurDream AI répond davantage à la mise en scène d'un personnage conçu par vous, du chat à l'image, à la voix et à la vidéo. Vérifiez droits et offres du moment."
    },
    replika: {
      title: "OurDream AI vs Replika : atelier d'histoires ou compagnon unique ?",
      description: "Comparer plusieurs personnages, conversation suivie, création visuelle, abonnement, mémoire et données personnelles.",
      intro: "OurDream AI sert à imaginer différents personnages et situations. La documentation officielle présente Replika comme un compagnon personnel qui se développe au fil des échanges. Choisir la réponse initiale la plus chaleureuse manquerait la vraie différence : l'activité que vous souhaitez répéter.",
      dimensions: [["Usage", "Construire des personnages et récits visuels", "Retrouver le même interlocuteur"], ["Mémoire", "Cohérence du profil et des scènes", "Utilisation des échanges passés"], ["Paiement et données", "Dreamcoins pour les médias", "Formule, canal d'achat et confidentialité"]],
      sections: [["Tester chaque outil pour son but", "Dans OurDream, inventez un adulte qui prépare une exposition imaginaire. Dans Replika, choisissez le mode de relation qui vous intéresse et donnez une préférence fictive sans caractère intime. Revenez plus tard poser une question précise sans souffler la réponse. Un ton affectueux ne prouve pas une bonne mémoire."], ["Production contre continuité", "Pour OurDream, observez si le personnage reste reconnaissable sur deux images et un clip en comptant les reprises. Pour Replika, demandez-vous s'il est agréable de reprendre un dialogue avec le même compagnon et quels souvenirs peuvent être corrigés ou supprimés. Le noter comme studio vidéo serait hors sujet."], ["Éviter les mauvaises surprises", "Les médias OurDream peuvent consommer des Dreamcoins. Chez Replika, l'annulation et la gestion de l'abonnement dépendent du canal d'achat ; supprimer l'application ne suffit pas nécessairement. Aucun compagnon artificiel ne remplace proches ou professionnels. Une adresse ou une information de santé ne sert pas de donnée de test."]],
      verdict: "Pour plusieurs personnages fictifs à faire vivre en chat, images et clips, commencez par OurDream AI. Pour une conversation continue avec un seul compagnon, Replika répond mieux à l'intention. Vérifiez dépenses et effacement des données avant tout engagement."
    }
  },
  ar: {
    "candy-ai": {
      title: "OurDream AI أم Candy AI: اكتشاف الشخصية أم تصميمها؟",
      description: "مقارنة اكتشاف الشخصيات وصناعتها والمحادثة والصور والفيديو والتكاليف الإضافية والخصوصية.",
      intro: "يتيح الخدمتان تصفح الشخصيات وصنع شخصيات جديدة؛ لذلك ليس دقيقًا وصف Candy AI بأنه دليل شخصيات فقط أو حصر OurDream AI في الإنشاء. الأهم هو الطريق من فكرة أولية إلى حوار ومشهد بصري يمكن استخدامه.",
      dimensions: [["البداية", "وصف قصير أو بحث عن شخصية منشورة", "Discover وShorts أو إنشاء شخصية"], ["تطوير الفكرة", "محادثة وصورة وفيديو وصوت", "تحقق من الوسائط المتاحة في خطتك"], ["الإنفاق", "افصل النماذج عن Dreamcoins", "تحقق من الرسائل والمكالمات والتوليد"]],
      sections: [["اختبر طريقين لا واجهتين فقط", "تخيل أمينة معرض خيالية بالغة بوضوح، واكتب مظهرها وهدفها وطريقة حديثها. ابحث أولًا عن شخصية مشابهة في كل خدمة، ثم أنشئ نسختك من الوصف نفسه. سجّل سهولة البحث ومرونة تعديل الشخصية كلًا على حدة؛ كثرة الخيارات المنشورة لا تقيس جودة أداة الإنشاء."], ["من المحادثة إلى مشهدين", "ناقش افتتاح معرض متخيل، وانتقل إلى موضوع آخر، ثم اسأل عما اتُّفق عليه أولًا. إذا كانت الصور متاحة، جرّب مشهدًا نهاريًا وآخر ليليًا واحسب محاولات إعادة التوليد قبل الحصول على وجه متسق. هذه طريقة اختبار للقارئ وليست نتيجة قياس نزعم أننا أجريناه."], ["اقرأ الفاتورة وحدود البيانات", "تفرق مساعدة OurDream بين الدردشة المعتادة وبعض النماذج والوسائط التي تستهلك Dreamcoins. راجع شروط المكالمات والصور والمقاطع الحالية لدى Candy AI قبل الدفع. افحص حفظ السجل ونشر الشخصيات وحذف البيانات، ولا تختبر أيًا منهما بصورة شخص حقيقي أو بسر خاص."]],
      verdict: "جرّب OurDream AI إذا كنت تريد بناء شخصية ثم نقلها بين الحوار والصورة والفيديو. وقد يكون Candy AI أنسب إذا أردت الوصول بسرعة إلى شخصية عبر Discover وShorts. ضع تكلفة المحاولات الفاشلة وحقوق المحتوى في القرار."
    },
    "crushon-ai": {
      title: "OurDream AI أم CrushOn AI: ورشة شخصيات أم تقمص أدوار مجتمعي؟",
      description: "مقارنة الشخصيات المنشورة وخيارات النماذج والذاكرة والوسائط والاشتراكات والخصوصية.",
      intro: "يركز CrushOn AI على شخصيات المجتمع والمحادثات القصصية الطويلة واختيار نموذج اللغة. يجمع OurDream AI إعداد الشخصية بالمحادثة وصناعة الوسائط. حدد أولًا هل تريد قصة نصية ممتدة أم استمرار الشخصية نفسها في صور ومقاطع.",
      dimensions: [["مصدر الشخصية", "ميّز الشخصية الخاصة من العامة", "تحقق من المؤلف وإعدادات النشر"], ["الذاكرة", "اختبر النموذج الذي ستستخدمه فعلًا", "فرّق بين الذكريات المحفوظة وسياق الحوار"], ["الكلفة", "Dreamcoins للنماذج والوسائط", "شروط النماذج المجانية والمتقدمة"]],
      sections: [["المكتبة ليست أداة الإنشاء", "عند اختيار بطاقة عامة في CrushOn اقرأ اسم صانعها وإعداداتها وحقوق استخدامها؛ وطبّق المبدأ نفسه على OurDream. أما مقارنة الإنشاء فتحتاج سيرة واحدة لشخص بالغ خيالي وهدفًا واحدًا في الخدمتين. مكتبة كبيرة لا تعني تلقائيًا محرر شخصيات أعمق."], ["اختبر الذاكرة دون كشف أسرارك", "تشرح وثائق CrushOn الذكريات المحفوظة بمعزل عن السياق القريب. اذكر ثلاثة تفاصيل غير حساسة عن مدينة خيالية، وغيّر الموضوع، ثم اسأل عنها. دوّن النموذج والخطة وهل حفظت الذكريات يدويًا. طول نافذة السياق المعلن ليس ضمانًا لاستدعاء طبيعي للمعلومات."], ["قارن ما ستستعمله فعلًا", "إذا كانت الصور والفيديو والصوت أساسية لك، احسب Dreamcoins المطلوبة في OurDream حسب حسابك الحالي. في CrushOn انتبه لتنوع الشخصيات واختيار النموذج واستمرار السرد. لا تضع معلومات حقيقية خاصة في بطاقة عامة، وراجع سياسات البيانات لدى الطرفين."]],
      verdict: "يستحق CrushOn AI التجربة لمن يحب شخصيات المجتمع واختيار نموذج المحادثة لقصة طويلة. ويميل OurDream AI إلى من يبني شخصية خاصة تتنقل بين الدردشة والوسائط. قارن الذاكرة باختبار متكافئ بدل الاعتماد على رقم تسويقي."
    },
    lovescape: {
      title: "OurDream AI أم Lovescape: من صورة الشخصية إلى فيديو صالح للاستخدام",
      description: "مقارنة تصميم الشخصيات ومسار الصورة إلى الفيديو والاتساق وDreamcoins وChips وحقوق الملفات.",
      intro: "يقدم Lovescape أيضًا شخصيات ومحادثات وصورًا وخيارات فيديو آخذة في التطور. اختزاله في دردشة عاطفية يخفي نقطة المقارنة مع OurDream AI: كم خطوة ومحاولة يلزم لإظهار شخص بالغ خيالي يمكن التعرف عليه في مقطع جيد؟",
      dimensions: [["الصورة إلى فيديو", "تحقق من النموذج والصيغة المتاحين", "ابدأ بصورة مولّدة داخل Lovescape"], ["ثبات الهوية", "الوجه والملامح بين مشهدين", "التعرف على الشخصية أثناء الحركة"], ["السعر", "Dreamcoins لكل عملية", "افصل الاشتراك عن Chips"]],
      sections: [["تابع مشروعًا كاملًا", "صف شخصية خيالية بالغة، وابدأ حوارًا قصيرًا، وأنشئ صورة شخصية وخلفية ثانية، ثم حرّك صورة إذا كانت الميزة متاحة. سجّل التعديلات والنتائج المرفوضة والوقت في كل مرحلة. لا تقارن مقطعًا ترويجيًا لإحدى الخدمتين بأول محاولة في الأخرى."], ["من أين تأتي الصورة الأصلية؟", "يعرض الشرح الرسمي لدى Lovescape تحويل صورة أُنشئت داخل المنصة إلى فيديو، ولا يثبت إمكان رفع أي ملف خارجي كيفما كان. إن كانت لديك مكتبة صور تملك حقوقها، فتحقق من هذا القيد قبل الدفع. وافحص أيضًا شروط المدخلات للنموذج المتاح لك في OurDream."], ["احسب تكلفة النتيجة المقبولة", "قد تستهلك بعض إجراءات Lovescape وحدات Chips بجانب الاشتراك، بينما توضح مساعدة OurDream مواضع استهلاك Dreamcoins. أدخل في الحساب إعادة المحاولة وتمديد الفيديو والتصدير وحقوق النشر. لا تقلّد وجه شخص حقيقي أو صوته دون إذن مناسب."]],
      verdict: "اختبر OurDream AI إذا كنت تعمل على شخصيات ونماذج متعددة للحوار والوسائط. وانظر إلى Lovescape إذا كان مسارك يبدأ بصورة مصنوعة فيه وينتهي بمقطع. القرار للنتائج التي ستحتفظ بها وحقوقها وكلفتها النهائية."
    },
    girlfriendgpt: {
      title: "OurDream AI أم GirlfriendGPT: شخصيات المبدعين أم شخصيتك الخاصة؟",
      description: "مقارنة اكتشاف الشخصيات وإنشاء الملفات والمحادثات والصور والرصيد والنشر وحقوق المبدعين.",
      intro: "تذكر شروط GirlfriendGPT شخصيات منشورة من المستخدمين وأخرى يصنعها الشخص بنفسه، إلى جانب المحادثة والصور. يتيح OurDream AI الاكتشاف والإنشاء أيضًا، مع امتداد نحو الصوت والفيديو. قيّم وفرة الكتالوج وحرية التعديل في اختبارين منفصلين.",
      dimensions: [["الشخصيات العامة", "تحقق من المصدر والظهور", "اقرأ اسم المبدع والإذن"], ["شخصيتك", "المظهر والصوت والخلفية", "الملف وبداية الحديث"], ["الوسائط", "صور وفيديو وصوت وDreamcoins", "صور ورصيد بحسب الخطة"]],
      sections: [["جولتان للفكرة نفسها", "ابحث في الخدمتين عن شخصيات منشورة من نوع قصصي متقارب واقرأ بيانات صانعيها. ثم أنشئ شخصًا بالغًا خياليًا له الهدف نفسه ونبرة الحديث نفسها. سهولة تصفح الشخصيات ليست دليلًا على دقة محرر الإنشاء، فلا تجمع النتيجتين في درجة واحدة."], ["لا تتوقف عند أول رد", "تابع مشهدًا آمنًا عبر عدة رسائل، ثم اسأل عن تفصيل ذُكر في بدايته. في الصور غيّر المكان والإضاءة واحسب المحاولات المعادة. إذا كان الفيديو شرطًا أساسيًا لك، تحقق من إتاحته الحالية في GirlfriendGPT بدل افتراض أنه يساوي OurDream."], ["حقوق الشخصية والرصيد", "تناقش شروط GirlfriendGPT مساهمات المستخدمين والرصيد الإضافي. اقرأها قبل إعادة استعمال شخصية نشرها غيرك. وفي OurDream افصل سعر الاشتراك عن Dreamcoins. لا تمنحك أي خدمة حق استخدام وجه إنسان حقيقي دون موافقته."]],
      verdict: "قد يناسب GirlfriendGPT من يستمتع باكتشاف أفكار أنشأها مبدعون آخرون. ويستحق OurDream AI التجربة لمن يريد تصميم شخصية ثم متابعة قصتها في المحادثة والصورة والصوت والفيديو. راجع الحقوق وحدود الخطة الحالية أولًا."
    },
    replika: {
      title: "OurDream AI أم Replika: صناعة قصص متعددة أم رفيق واحد مستمر؟",
      description: "مقارنة تعدد الشخصيات واستمرار المحادثة والذاكرة والوسائط والاشتراك والبيانات الشخصية.",
      intro: "يصلح OurDream AI لتخيل شخصيات ومشاهد خيالية متعددة. وتصف مساعدة Replika الرسمية رفيقًا شخصيًا تتطور العلاقة معه عبر الحديث. ليست المسألة أيهما ألطف في أول رسالة، بل النشاط الذي تود العودة إليه مرارًا.",
      dimensions: [["الهدف", "صنع شخصيات وحكايات مرئية", "الحديث مجددًا مع الرفيق نفسه"], ["الذاكرة", "اتساق الملف والمشهد", "استخدام تفاصيل المحادثات السابقة"], ["المال والبيانات", "Dreamcoins للوسائط", "الخطة وطريقة الشراء والخصوصية"]],
      sections: [["اختر اختبارًا يناسب الغاية", "في OurDream ابتكر شخصًا بالغًا خياليًا يعدّ معرضًا متخيلًا. وفي Replika اختر نوع العلاقة الذي تريده وأخبره بتفضيل خيالي غير حساس. عد لاحقًا واسأل سؤالًا محددًا من دون تلقين الجواب. النبرة الودودة وحدها ليست دليلًا على التذكر."], ["الإنتاج أم الاستمرارية", "في OurDream راقب ثبات الشخصية بين صورتين ومقطع قصير، مع حساب الإعادات. في Replika ركز على سهولة متابعة الحديث مع الرفيق نفسه وإمكان تصحيح المعلومات المحفوظة أو حذفها. تقييمه كاستوديو فيديو لا يخدم غرضه الأساسي."], ["الاشتراك وحدود التعلق", "قد تستهلك وسائط OurDream وحدات Dreamcoins. تعتمد إدارة اشتراك Replika وإلغاؤه على قناة الشراء؛ حذف التطبيق قد لا يوقف المدفوعات. لا يحل رفيق آلي محل العلاقات الإنسانية أو المختصين. لا تختبر ذاكرته بعنوانك أو معلوماتك الصحية."]],
      verdict: "ابدأ بـOurDream AI إن أردت شخصيات خيالية متعددة ومحادثات وصورًا ومقاطع. وإن كان هدفك حوارًا مستمرًا مع رفيق آلي واحد، فقد يكون Replika أقرب إليه. تحقق من الإنفاق وحذف البيانات قبل الاشتراك."
    }
  }
};
