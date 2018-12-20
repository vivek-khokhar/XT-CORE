const fs = require('fs');

const stream = fs.createReadStream('test.txt', 'UTF8');

stream.on('data', function(chunk){
    console.log(`Recieved ${chunk.length} bytes of data (${chunk})`);
})

const file = fs.createWriteStream('test.txt');

for (let index = 0; index < 10; index++) {
    file.write(`Node.js:
    ........
    
    What is Node?
    Node Architacture
    Node Applicationa?
    
    What is Node?
    
    Node js is javascript Platform.
    
    "Platform is collection of tools , compiler, libs and runtime".
    
    Node is used to build async, non blocking io, network applications.
    
    Node is event driven, async platform.
    
    History:
    The node.js project began in 2009 as a Javascript environment decoupled from the broser.
    Using Google's V8 and Marc Lehmann's libev. lib => library(lib) + ev => event.
    
    As node.js grew in popularity, it was important to make it work on windows, but libev rzn only on Unix.
    
    Non Event driven Architectures:
    ...............................
    
    Application     ------>     Runtime     -------> OS
    api() ==> api_runtime ==> os_api ==> hal_api ==> hardware
    
    Event Driven Arechitecture:
    ...............................
    
    Applicstion Layer ----> Runtime ----> Event Machine ------>  OS Layer
    Flow - 1
                                    |
    api()       ====>  api_runtime  | Event Machine -------> OS LAyer
                                    |       |
                                        Wait for OS events
    
    Flow - 2
                                    |
    api()       ====>  api_runtime  | Event Machine -------> OS LAyer
                                    |       |
                                    1.Wait for OS events
                                    2.Once events emitted by OS
                                    3.Gather event 
                                    4.Assign event to callback
                                    5.Stores events into event queue
    
    Flow - 3
                                    |
    api()       ====>  api_runtime  | Event Machine -------> OS LAyer
                                    |       |
                                    1.Wait for OS events
                                    2.Once events emitted by OS
                                    3.Gather event 
                                    4.Assign event to callback
                                    5.Stores events into event queue
                   Process Message 
                    |
                    |
                    |
            ________________________
            message1, m2,m3,m4,mN....
            ___________________________
    
        Note: Node and event driven Architacture:
    Node is built on event Machine called "libev" on Unix in the begaining.
    
    App -----> v8 -----> libev -----> Unix
    Node team wanted to port on different operating system like windows, mac OS......
    Node team created portable event machine wrapper => library(lib) Universal(uv) (LibUv)
    
                Event Machine
                    |
                OS Event Subsystem
                    
                    epoll(event Machine)
                        |
                    Linux
    
    epoll:
    Epoll is a Linux kernel system call for a scalable I/O event notification mechanism.
    
    KQueue:
    
    Kqueue is a scalable event notification interface introduced in FreeBSD 4.1 on luly 2000.
    
    IOCP:
    Input/output completion port (IOCP) is an API for performing multiple simultaneous asynchronous inputy/output operations in windows NT versions 3.5 and later.
    
    event ports:
        Async IO event notification interface for sun solaris OS.
                    libuv 
    
    libuv Internals:
    
    Libuv provides lot of internal parts
    
    1. event loop
    2. Thread pools
    3. Low level apis(io, network, timers)
    
    1. Event Loop:
        It is a simple while loop.
    
        sudo code:-
        while there are still events to process:
            e = get the next event
            if there is a callback associated with e:
                call the callback
            "The event-loop usually keeps running forever the above psudocode "
    
    Some examples of events are:
    1. File is ready for writing
    2. A socket has data ready to be ready
    3. A timer has timed out.
    
    
    1. The event loop is the central part of libuv's functionality.
    2.It takes care of polling for i/o and scheduling callbacks to be run based on different sources of events.
    
    What is polling?
        In CS, polling is the process where the computer or controlling device waits for an external device to check for its rediness or state, often with low-level hardware.
    
    Acommunication technique that determines when a terminal is ready to send data.
    The computer continually interrogates its connected terminals in a round robin sequence. If a terminal has data to send,
    it sends back an acknowledgment and the transmission begains.
    
    App ---> V8 ----> libUv ---> polling --------- single (event) -data <--- os <---low level io
    
    
    IO programming:
    
    File IO and network IO:
    ............................
    
    libuv uses a thread pool to make asynchronous file I/O operations possible.
    
    But network I/O is always performed in a single thread, each loop's thread.
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    how to start node runtime?
    
    1. REPL mode
        >node
    2. through javascript runtime
        >node jsfilename
    
    
    ///////////////////////////////////////////////////
    Node Application Architecture:
    ..................................
    
    Node Application contains meta file
    1. packadge.json
        Which describes about Node Application
    2. Collection of javascript files called modules
        Node app is based cjs module pattern by default but you can built based on other patterns as well provided loaders.
    3. Node application starts with
        1. Custom module 
            developed by you
        2. In built modules
            part of node distribution.
        3. Third party modules
            from community eg. angular, raect,express......
    
 `)
    
}
