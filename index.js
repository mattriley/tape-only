const apply = {
    one: tape => tape,
    many: tape => Object.assign(tape.skip, { only: tape, skip: tape.skip }),
    ignore: tape => Object.assign(tape, { only: tape })
};

const defaultMode = 'one';

const checkMode = mode => {
    if (apply[mode]) return mode;
    console.warn(`tape-only mode "${mode}" not recognised so defaulting to "${defaultMode}"`);
    return defaultMode;
}

module.exports = (tape, opts = {}) => {
    const mode = checkMode(opts.mode || process.env.TAPE_ONLY || defaultMode);
    console.warn(`tape-only mode is "${mode}"`);
    return apply[checkMode(mode)](tape)
};
