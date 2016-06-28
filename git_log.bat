@echo off
FOR /F "usebackq" %%t IN (`chdir`) DO SET Current=%%t
rem chdir の結果を変数Currentに入れる。

echo %Current%
git -C %Current% log


rem git addする「.」は新規作成と変更されたファイルをステージングする。

