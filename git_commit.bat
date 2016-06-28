@echo on
FOR /F "usebackq" %%t IN (`chdir`) DO SET Current=%%t
rem chdir の結果を変数Currentに入れる。

echo %Current%
git -C %Current% commit -m "%1"
rem 「%1」でパラメータ1が入る、２．３．４．と続く0は現在のファイル名



rem git addする「.」は新規作成と変更されたファイルをステージングする。

