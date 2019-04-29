import { Agent } from '../';

export * from './disco';
export * from './discoonly';
export * from './attention';
export * from './avatar';
export * from './bind';
export * from './blocking';
export * from './bob';
export * from './bookmarks';
export * from './carbons';
export * from './chatstates';
export * from './command';
export * from './correction';
export * from './csi';
export * from './dataforms';
export * from './extdisco';
export * from './features';
export * from './geoloc';
export * from './hostmeta';
export * from './invisible';
export * from './jingle';
export * from './keepalive';
export * from './mam';
export * from './markers';
export * from './mood';
export * from './muc';
export * from './nick';
export * from './ping';
export * from './private';
export * from './pubsub';
export * from './push';
export * from './reach';
export * from './receipts';
export * from './register';
export * from './roster';
export * from './rtt';
export * from './sasl';
export * from './session';
export * from './smacks';
export * from './time';
export * from './upload';
export * from './vcard';
export * from './version';

import Attention from './attention';
import Avatar from './avatar';
import Bind from './bind';
import Blocking from './blocking';
import Bob from './bob';
import Bookmarks from './bookmarks';
import Carbons from './carbons';
import ChatStates from './chatstates';
import Command from './command';
import Correction from './correction';
import CSI from './csi';
import DataForms from './dataforms';
import Disco from './disco';
import DiscoOnly from './discoonly';
import ExtDisco from './extdisco';
import Features from './features';
import Geoloc from './geoloc';
import HostMeta from './hostmeta';
import Invisible from './invisible';
import Jingle from './jingle';
import KeepAlive from './keepalive';
import MAM from './mam';
import Markers from './markers';
import Mood from './mood';
import MUC from './muc';
import Nick from './nick';
import Ping from './ping';
import Private from './private';
import PubSub from './pubsub';
import Push from './push';
import Reach from './reach';
import Receipts from './receipts';
import Register from './register';
import Roster from './roster';
import RTT from './rtt';
import SASL from './sasl';
import Session from './session';
import Smacks from './smacks';
import Time from './time';
import Upload from './upload';
import VCard from './vcard';
import Version from './version';

export function core(client: Agent) {
    client.use(HostMeta);
    client.use(Features);
    client.use(SASL);
    client.use(Smacks);
    client.use(Bind);
    client.use(Session);
    client.use(Disco);
    client.use(DiscoOnly);
}

export default function(client: Agent) {
    client.use(Attention);
    client.use(Avatar);
    client.use(Blocking);
    client.use(Bob);
    client.use(Bookmarks);
    client.use(Carbons);
    client.use(ChatStates);
    client.use(Command);
    client.use(Correction);
    client.use(CSI);
    client.use(DataForms);
    client.use(ExtDisco);
    client.use(Geoloc);
    client.use(Invisible);
    client.use(Jingle);
    client.use(KeepAlive);
    client.use(MAM);
    client.use(Markers);
    client.use(MUC);
    client.use(Mood);
    client.use(Nick);
    client.use(Ping);
    client.use(Private);
    client.use(Push);
    client.use(PubSub);
    client.use(Reach);
    client.use(Receipts);
    client.use(Register);
    client.use(Roster);
    client.use(RTT);
    client.use(Time);
    client.use(Upload);
    client.use(VCard);
    client.use(Version);
}
