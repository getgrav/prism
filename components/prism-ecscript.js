Prism.languages.ecscript = {
  'comment': {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true,
  },

  'string': {
    pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true,
  },

  'function': {
    pattern: /(def_(fun|pose|real_vec|real|rot|string|trans|u32))/g,
    lookbehind: false,
  },

  'variable': {
    pattern: /(bool|fun|pose|real(?:_vec)?|rot|string|trans|u32(?:_vec)?)/,
    lookbehind: true,
  },

  'builtin': {
    pattern: /(?:motion_(?:para|seq)|if|while|break|return|wait(?:_for_settle)?|(?:group|stream)_motion_seq|include|eval)/,
    lookbehind: true,
  },

  'boolean': {
    pattern: /(TRUE|FALSE)/,
  },

  'keyword': {
    pattern: /motion_para|motion_seq|find_solution|rrt_plan|move_pose|move_joints|set_position_state/g,
    lookbehind: true,
  },

  'constant': {
    pattern: /[A-Z][A-Z0-9_]+/,
    lookbehind: true,
  },
};
