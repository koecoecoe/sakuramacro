@echo off
FOR /F "usebackq" %%t IN (`chdir`) DO SET Current=%%t
rem chdir �̌��ʂ�ϐ�Current�ɓ����B

echo %Current%
git -C %Current% log


rem git add����u.�v�͐V�K�쐬�ƕύX���ꂽ�t�@�C�����X�e�[�W���O����B

