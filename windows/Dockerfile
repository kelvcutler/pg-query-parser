FROM golang
RUN mkdir /go/src/main 
RUN GOPATH=/go go get github.com/lfittl/pg_query_go
ADD . /go/src/main 
WORKDIR /go/src/main
RUN GOPATH=/go go build -o main .
ENTRYPOINT ["/go/src/main/main"]