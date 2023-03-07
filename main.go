package main

import (
	"log"
	"github.com/jlaffaye/ftp"
	"time"
)

func main() {
	c, err := ftp.Dial("snorresovold%40gmail.com@pockethost.io", ftp.DialWithTimeout(5*time.Second))
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