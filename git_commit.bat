@echo on
FOR /F "usebackq" %%t IN (`chdir`) DO SET Current=%%t
rem chdir �̌��ʂ�ϐ�Current�ɓ����B

echo %Current%
git -C %Current% commit -m "%1"
rem �u%1�v�Ńp�����[�^1������A�Q�D�R�D�S�D�Ƒ���0�͌��݂̃t�@�C����



rem git add����u.�v�͐V�K�쐬�ƕύX���ꂽ�t�@�C�����X�e�[�W���O����B

