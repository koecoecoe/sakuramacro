//JScriptからVBSのInputBox関数を実行
var oSC = new ActiveXObject("ScriptControl");
oSC.Language = "VBScript";
var sFunc = 'Function InBox(prompt, title, default)\n';
sFunc += '    InBox = InputBox(prompt, title, default)\n';
sFunc += 'End Function\n';
oSC.AddCode(sFunc);
var Ret = oSC.Run ("InBox", "メッセージ", "タイトル", "初期値");


S_ExecCommand('git_commit.bat',,'C:\\Users\\masaki_hashimoto\\sakura');