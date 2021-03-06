(defun add-redirect (name from to)
  (eval `(hunchentoot:define-easy-handler (,name :uri ,from) ()
    (redirect ,to))))

(defun add-redirects (redirects)
  (dolist (redirect redirects)
    (add-redirect (first redirect) (second redirect) (third redirect))
    ))

(add-redirects
 '(
   (about-upper "/About/" "/about.html")
   (about "/about/" "/about.html")
   (whatibelieve-upper "/About/WhatIBelieve/" "/about/what-i-believe.html")
   (whatibelieve "/about/whatibelieve" "/about/what-i-believe.html")
   (blog "/blog/" "/thoughts.html")
   (efficiency "/efficiency" "/efficiency.html")
   (efficiency-slash "/Efficiency/" "/efficiency.html")
   (interesting "/Interesting" "/about/interesting-things.html")
   (interesting-slash "/Interesting/" "/about/interesting-things.html")
   (tools "/Tools" "http://spyrosoft.com/tools.html")
   (tools-slash "/Tools/" "http://spyrosoft.com/tools.html")
   (binaryunicodeconverter "/Tools/BinaryUnicodeConverter/" "http://spyrosoft.com/tools/binary-unicode-converter.html")
   (qwertydvorakcolemak "/Tools/CompareQwertyToDvorakToColemak/" "http://spyrosoft.com/tools/compare-qwerty-to-dvorak-to-colemak.html")
   (qwertytodvorak "/Tools/QwertyToDvorak/" "http://spyrosoft.com/tools/qwerty-to-dvorak-translator.html")
   (factorfinder "/Tools/FactorFinder/" "http://spyrosoft.com/tools/factor-finder.html")
   (unicodedecoder "/Tools/UnicodeDecoder/" "http://spyrosoft.com/tools/unicode-lookup.html")
   (manualcipherdecoder "/Tools/ManualCipherDecoder/" "http://spyrosoft.com/tools/manual-cipher-decoder.html")
   (morsecodetranslator "/Tools/MorseCode/" "http://spyrosoft.com/tools/morse-code-translator.html")
   (flipqwerty "/Tools/FlipQwerty/" "http://spyrosoft.com/tools/flip-qwerty.html")
   (flipdvorak "/Tools/FlipDvorak/" "http://spyrosoft.com/tools/flip-dvorak.html")
   (huffmanencoder "/Tools/HuffmanEncoder/" "http://spyrosoft.com/tools/huffman-encoder.html")
   ))