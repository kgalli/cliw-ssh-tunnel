import {spawn} from 'child_process'

export interface TunnelConfig {
  localHost: string;
  localPort: string;
  remoteHost: string;
  remotePort: number;
  jumpHost: string;
  jumpHostPort?: number;
  user?: string;
}

function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomPort(): number {
  return randomInteger(3000, 65535)
}

function defaultTunnelOptions() {
  return {
    localHost: '127.0.0.1',
    localPort: randomPort(),
    jumpHostPort: 22,
  }
}

export function open(options: TunnelConfig) {
  const config = {...defaultTunnelOptions(), ...options}

  const sshArgs = []

  // sshArgs.push('-f') run in background
  sshArgs.push('-N')
  sshArgs.push('-S /tmp/TEMP_SSH_CTL_FILE')
  sshArgs.push(`-L ${config.localHost}${config.localPort}:${config.remoteHost}:${config.remotePort}`)
  sshArgs.push(`-l $USER@${config.jumpHost}`)

  const ssh = spawn('ssh', sshArgs)

  console.log('ssh', sshArgs.join(' '))
  console.dir(ssh)

  process.on('exit', () => {
    ssh.kill()
  })
}
