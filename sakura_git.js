//JScript����VBS��InputBox�֐������s
var oSC = new ActiveXObject("ScriptControl");
oSC.Language = "VBScript";
var sFunc = 'Function InBox(prompt, title, default)\n';
sFunc += '    InBox = InputBox(prompt, title, default)\n';
sFunc += 'End Function\n';
oSC.AddCode(sFunc);
var Ret = oSC.Run ("InBox", "���b�Z�[�W", "�^�C�g��", "�����l");


S_ExecCommand('git_commit.bat',,'C:\\Users\\masaki_hashimoto\\sakura');