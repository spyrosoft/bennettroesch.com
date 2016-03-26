(ql:quickload :hunchentoot)
(ql:quickload :cl-smtp)

(defpackage :bennettroesch
  (:use :common-lisp :hunchentoot))

(in-package :bennettroesch)

;; Needed if you set :error-template-directory in the easy-acceptor
(setf hunchentoot::*show-lisp-errors-p* t)

(defvar *hunchentoot-directory* (pathname (directory-namestring #.(or *compile-file-pathname* *load-truename*))))

(defvar *web-root-directory* (merge-pathnames "awestruct/_site/" *hunchentoot-directory*))

(load "private/credentials.lisp")

(defvar bennettroesch-server
  (make-instance 'hunchentoot:easy-acceptor
                 :document-root *web-root-directory*
                 :error-template-directory (merge-pathnames "error-templates/" *web-root-directory*)
                 :access-log-destination "logs/access.log"
                 :message-log-destination "logs/error.log"
                 :port 8081))

(load "routes.lisp")

(hunchentoot:start bennettroesch-server)