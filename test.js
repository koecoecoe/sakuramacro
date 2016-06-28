//  
//  アプリケーション操作
//  
//  　定数を指定してエクスプローラで開く。
//  

//  特殊フォルダ定数
var SSF_DESKTOP          =  0;  // デスクトップ(仮想)
var SSF_IE               =  1;  // Internet Explorer
var SSF_PROGRAMS         =  2;  // プログラム
var SSF_CONTROLS         =  3;  // コントロールパネル
var SSF_PRINTERS         =  4;  // プリンタ
var SSF_PERSONAL         =  5;  // マイドキュメント
var SSF_FAVORITES        =  6;  // お気に入り
var SSF_STARTUP          =  7;  // スタートアップ
var SSF_RECENT           =  8;  // 最近使ったファイル
var SSF_SENDTO           =  9;  // 送る
var SSF_BITBUCKET        = 10;  // ごみ箱
var SSF_STARTMENU        = 11;  // スタートメニュー
var SSF_DESKTOPDIRECTORY = 16;  // デスクトップ(フォルダ)
var SSF_DRIVES           = 17;  // マイコンピュータ
var SSF_NETWORK          = 18;  // ネットワークコンピュータ
var SSF_NETHOOD          = 19;  // NetHood
var SSF_FONTS            = 20;  // フォント
var SSF_TEMPLATES        = 21;  // テンプレート

//  Shell関連の操作を提供するオブジェクトその2を取得
var sh = new ActiveXObject( "Shell.Application" );

//  マイドキュメントをエクスプローラで開く
sh.Open( SSF_PERSONAL );

//  オブジェクトを解放
sh = null;
