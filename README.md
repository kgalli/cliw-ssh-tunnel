cliw-ssh-tunnel
===============

Plugin to add ssh tunnel sub command to cliw

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cliw-ssh-tunnel.svg)](https://npmjs.org/package/cliw-ssh-tunnel)
[![Downloads/week](https://img.shields.io/npm/dw/cliw-ssh-tunnel.svg)](https://npmjs.org/package/cliw-ssh-tunnel)
[![License](https://img.shields.io/npm/l/cliw-ssh-tunnel.svg)](https://github.com/kgalli/cliw-ssh-tunnel/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cliw-ssh-tunnel
$ cliw COMMAND
running command...
$ cliw (-v|--version|version)
cliw-ssh-tunnel/0.0.0 darwin-x64 node-v10.15.0
$ cliw --help [COMMAND]
USAGE
  $ cliw COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cliw tunnel:close [FILE]`](#cliw-tunnelclose-file)
* [`cliw tunnel:list [FILE]`](#cliw-tunnellist-file)
* [`cliw tunnel:open [CONFIG-NAME]`](#cliw-tunnelopen-config-name)

## `cliw tunnel:close [FILE]`

close open tunnel

```
USAGE
  $ cliw tunnel:close [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ cliw hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/tunnel/close.ts](https://github.com/kgalli/cliw-ssh-tunnel/blob/v0.0.0/src/commands/tunnel/close.ts)_

## `cliw tunnel:list [FILE]`

list all open ssh tunnels

```
USAGE
  $ cliw tunnel:list [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ cliw hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/tunnel/list.ts](https://github.com/kgalli/cliw-ssh-tunnel/blob/v0.0.0/src/commands/tunnel/list.ts)_

## `cliw tunnel:open [CONFIG-NAME]`

open ssh tunnel

```
USAGE
  $ cliw tunnel:open [CONFIG-NAME]

OPTIONS
  -d, --dest=dest                  remote host
  -h, --help                       show CLI help
  -i, --destPort=destPort          remote host port
  -i, --jumpHost=jumpHost          jump host (bastion host)
  -i, --jumpHostPort=jumpHostPort  [default: 22] name to print
  -p, --srcPort=srcPort            local host port
  -s, --src=src                    [default: 127.0.0.1] local host

EXAMPLE
  $ cliw tunnel:open
```

_See code: [src/commands/tunnel/open.ts](https://github.com/kgalli/cliw-ssh-tunnel/blob/v0.0.0/src/commands/tunnel/open.ts)_
<!-- commandsstop -->
