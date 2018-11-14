import flatten from 'flat';
const pageMessage = {
  pages: {
    upgradedTipBefore: 'Bitcion Cash Network Upgrade Countdown',
    upgradedTipAfter: 'Bitcoin Cash network upgraded at block {block}',
    height: 'Height',
    relayedBy: 'Relayed By',
    Time: 'Time',
    notForked: '(Not Forked Yet)',
    blockRewardTitle: 'BCH vs BSV Average Block Reward',
    coinbaseFees: 'coinbase + fees',
    blockReward: 'Block Reward（USD）',
    transactionVsTitle: 'BCH vs BSV Transactions',
    transactionPerDay: 'Transactions Per Day',
    specialOPCode: 'Special OP_codes',
    bchOpCode: '{count} new op_code',
    bsvOpCode: '{count} old op_code',
    countDownTip: 'Countdown timer adjusts with block time dynamically'
  }
};
const pageMessageFlatten = flatten(pageMessage);
export default pageMessageFlatten;
