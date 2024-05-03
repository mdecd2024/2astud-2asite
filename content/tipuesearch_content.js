var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:\xa0 https://mdecd2024.github.io/2astud-2asite/ \xa0 \n 網誌:\xa0 https://mdecd2024.github.io/2astud-2asite/blog \xa0 \n 簡報:\xa0 https://mdecd2024.github.io/2astud-2asite/reveal \xa0 \n 倉儲:\xa0 https://github.com/mdecd2024/2astud-2asite \xa0 \n', 'tags': '', 'url': 'About.html'}, {'title': '專案', 'text': '', 'tags': '', 'url': '專案.html'}, {'title': 'mdecycu', 'text': '', 'tags': '', 'url': 'mdecycu.html'}, {'title': 'g2', 'text': '41123123 \n 在這堂課中，我學習到了如何建立和維護網誌和網站，還有使用 Git 分支和 Source Tree 等工具進行專案管理，也學到 了NX、Onshape等設計軟體，以及詢問AI來解決問題的方法 \n 41123105 \n 透過 GitHub、Replit 和 Nx，我學會了團隊合作、版本控制、程式開發、除錯和專案管理等關鍵技能。這些工具的結合讓學習更有效率和有趣，為我的程式設計之路開啟了新的可能性。 \n 41123119 \n 這堂課與一般中式教育的方式不同 ， 比較像是西方教育 ， 更加強調學生的自主學習和思考能力，鼓勵他們提出問題、進行討論和獨立思考。培養學生的實際技能和解決問題的能力，而不僅僅是死記硬背知識。例如 解決版本衝突 latex整合 等。 \n \n 41123130 \n 這堂課程使用了 GitHub、Replit、Nx 等軟體，透過 Git我學會了團隊合作和版本控制的重要性；Replit 讓我更深入瞭解了程式開發環境的建置和除錯；而 Nx 則提供了更有效的專案管理和程式碼組織技巧。這些工具的結合，讓學習過程更加互動和實用。 \n 41123145 \n 使用github啟動codespaces維護動態網站以及更新網誌，之前只學會了replit更新網站以及網誌，這學期學會了 codespaces更新更加方便，只需要在終端機打幾行指令，就可以完成倉儲更新。 \n 41123152 這堂課讓我學習到如何建立、更新、維護、除錯一個屬於自己的網站，學習了NX、Onshape等設計軟體，也學會了團隊合作和版本控制的重要性，以及如何簡化維護流程，學會了如何幫影片上字幕。 \n 41023156 \n 開學到現在已經第11週，每週的任務都不一樣，讓印象最深刻的是學會如何使用replite更新自己的網誌，還有將教學影片上字幕跟製作其中整合影片，讓我學到如何跟組員一起討論和分工合作，這是一堂值得學習的課程 \n \n', 'tags': '', 'url': 'g2.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};