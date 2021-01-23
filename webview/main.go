package main

import (
	"log"

	"github.com/zserge/lorca"
)

func main() {
	ui, err := lorca.New("https://footballline.vercel.app", "", 414, 736)

	if err != nil {
		log.Fatal(err)
	}

	defer ui.Close()

	<-ui.Done()
}
