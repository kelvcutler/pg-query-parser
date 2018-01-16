package main

import (
    "log"
    "os"
    "github.com/lfittl/pg_query_go"
)

func main() {
    tree, err := pg_query.ParseToJSON(os.Args[1])
    os.Stdout.Write([]byte(tree))
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}