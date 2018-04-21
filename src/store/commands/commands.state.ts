import * as Models from '../../models';

export interface CommandsState {
  /** List of commands */
  commands: Models.Command[];
  /** History of commands sent */
  history: string[];
  /** Current index in the command history, `-1` for empty string */
  historyIndex: number;
  /** Contain the latest autocompleted command */
  autocomplete: string;
}

export const state: CommandsState = {
  commands: [
    {
      root: 'help',
      desc: 'print a list of all available commands',
      payload: 'COMMAND_HELP',
    },
    {
      root: 'clear',
      desc: 'clear the console output',
      payload: 'COMMAND_CLEAR',
    },
    {
      root: 'username',
      desc: 'change your username',
      payload: 'COMMAND_USERNAME',
      args: true,
      argsType: ['string'],
    },
    {
      root: 'run',
      desc: 'run a script to earn money and exp.',
      payload: 'COMMAND_RUN',
      args: true,
      argsType: ['string'],
    },
  ],

  history: [''],
  historyIndex: -1,
  autocomplete: '',
};
