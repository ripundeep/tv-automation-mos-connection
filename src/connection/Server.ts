import { Socket } from 'net'
import { ConnectionType, SocketDescription } from './socketConnection'

// import {ProfilesSupport} from '../config/connectionConfig';
// import {Socket} from 'net';

/** */
export abstract class MosDevice {

	// private _host: string
	private _id: string

	// private _profiles: ProfilesSupport

	// private _primaryServer: Server
	// private _buddyServr: Server
	// private _currentServer: Server = this._primaryServer

	/** */
	get id (): string {
		return this._id
	}
}

/** */
export class Server {
	// private _connected: boolean
	// private _lastSeen: number

	private _sockets: {[socketID: number]: SocketDescription} = {}

	/** */
	registerIncomingConnection (socketID: number, socket: Socket, portDescription: ConnectionType) {
		this._sockets[socketID] = {
			socket: socket,
			portDescription: portDescription
		}
	}

	/** */
	removeSocket (socketID: number) {
		delete this._sockets[socketID]
	}

	/** */
	get lowerPortSockets (): Socket[] {
		let sockets: Socket[] = []
		for (let i in this._sockets) {
			if (this._sockets[i].portDescription === 'lower') {
				sockets.push(this._sockets[i].socket)
			}
		}

		return sockets
	}

	/** */
	get upperPortSockets (): Socket[] {
		let sockets: Socket[] = []
		for (let i in this._sockets) {
			if (this._sockets[i].portDescription === 'upper') {
				sockets.push(this._sockets[i].socket)
			}
		}

		return sockets
	}

	/** */
	get queryPortSockets (): Socket[] {
		let sockets: Socket[] = []
		for (let i in this._sockets) {
			if (this._sockets[i].portDescription === 'query') {
				sockets.push(this._sockets[i].socket)
			}
		}

		return sockets
	}
}
