//  
//  �A�v���P�[�V��������
//  
//  �@�萔���w�肵�ăG�N�X�v���[���ŊJ���B
//  

//  ����t�H���_�萔
var SSF_DESKTOP          =  0;  // �f�X�N�g�b�v(���z)
var SSF_IE               =  1;  // Internet Explorer
var SSF_PROGRAMS         =  2;  // �v���O����
var SSF_CONTROLS         =  3;  // �R���g���[���p�l��
var SSF_PRINTERS         =  4;  // �v�����^
var SSF_PERSONAL         =  5;  // �}�C�h�L�������g
var SSF_FAVORITES        =  6;  // ���C�ɓ���
var SSF_STARTUP          =  7;  // �X�^�[�g�A�b�v
var SSF_RECENT           =  8;  // �ŋߎg�����t�@�C��
var SSF_SENDTO           =  9;  // ����
var SSF_BITBUCKET        = 10;  // ���ݔ�
var SSF_STARTMENU        = 11;  // �X�^�[�g���j���[
var SSF_DESKTOPDIRECTORY = 16;  // �f�X�N�g�b�v(�t�H���_)
var SSF_DRIVES           = 17;  // �}�C�R���s���[�^
var SSF_NETWORK          = 18;  // �l�b�g���[�N�R���s���[�^
var SSF_NETHOOD          = 19;  // NetHood
var SSF_FONTS            = 20;  // �t�H���g
var SSF_TEMPLATES        = 21;  // �e���v���[�g

//  Shell�֘A�̑����񋟂���I�u�W�F�N�g����2���擾
var sh = new ActiveXObject( "Shell.Application" );

//  �}�C�h�L�������g���G�N�X�v���[���ŊJ��
sh.Open( SSF_PERSONAL );

//  �I�u�W�F�N�g�����
sh = null;
