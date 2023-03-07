package main

import (
	"log"
	"github.com/jlaffaye/ftp"
	"time"
)

func main() {
	c, err := ftp.Dial("ftp://snorresovold%40gmail.com@pockethost.ioftp.example.org:21", ftp.DialWithTimeout(5*time.Second))
	if err != nil {
		log.Fatal(err)
	}

err = c.Login("anonymous", "anonymous")
if err != nil {
    log.Fatal(err)
}

// Do something with the FTP conn

if err := c.Quit(); err != nil {
    log.Fatal(err)
}
}