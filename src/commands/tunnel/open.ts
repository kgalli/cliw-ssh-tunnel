import {Command, flags} from '@oclif/command'
import {open, TunnelConfig} from '../../lib/ssh-tunnel'

export default class TunnelOpen extends Command {
  static description = 'open ssh tunnel'

  static examples = [
    '$ cliw tunnel:open',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    src: flags.string({char: 's', description: 'local host', default: '127.0.0.1'}),
    srcPort: flags.string({char: 'p', description: 'local host port'}),
    dest: flags.integer({char: 'd', description: 'remote host'}),
    destPort: flags.string({char: 'i', description: 'remote host port'}),
    jumpHost: flags.string({char: 'i', description: 'jump host (bastion host)'}),
    jumpHostPort: flags.integer({char: 'i', description: 'name to print', default: 22}),
  }

  static args = [{name: 'config-name'}]

  async run() {
    const {args, flags} = this.parse(TunnelOpen)

    const tunnelConfig = {} as TunnelConfig

    tunnelConfig.jumpHost = ''
    tunnelConfig.remoteHost = ''
    tunnelConfig.remotePort = 5432

    try {
      open(tunnelConfig)
    } catch (error) {
      this.error(error.message, error)
    }
  }
}
