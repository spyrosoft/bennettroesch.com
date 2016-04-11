(defmacro add-redirects (&rest redirects)
  `(dolist (redirect ,redirects)
;    `(hunchentoot:define-easy-handler (,(first redirect) :uri ,(second redirect)) ()
;       (redirect ,(third redirect)))
    `(print ,(first redirect))
    `(print 'yes-yes-yes)
    ))

(add-redirects '(binary-unicode-converter "/Tools/BinaryUnicodeConverter/" "http://spyrosoft.com/tools/binary-unicode-converter.html"))