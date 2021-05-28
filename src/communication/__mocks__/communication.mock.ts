export const mockResponseCommunication = {
  position: {
    x: -487.28591250000005,
    y: 1557.0142250000004,
  },
  message: 'este es un mensaje secreto',
};
export const mockBodyFailureTopSecretSatelite = {
  satelites: [
    {
      name: 'kenobiiii',
      distance: 100.0,
      message: ['este', '', '', 'mensaje', 'es', 'un', 'secreto'],
    },
  ],
};

export const mockBodyFailureTopSecretMessage = {
  satelites: [
    {
      name: 'kenobi',
      distance: 100.0,
      message: ['este', '', '', 'mensaje'],
    },
  ],
};

export const mockBodyTopSecret = {
  satelites: [
    {
      name: 'kenobi',
      distance: 100.0,
      message: ['este', '', '', 'mensaje', ''],
    },
    {
      name: 'skywalker',
      distance: 115.5,
      message: ['', 'es', '', '', 'secreto'],
    },
    {
      name: 'sato',
      distance: 142.7,
      message: ['este', '', 'un', '', ''],
    },
  ],
};

export const mockBodyOneSatelite = {
  distance: 100.0,
  message: ['este', '', '', 'mensaje', '', 'es', 'este', '', '', 'un'],
};

export const mockBodyOneSateliteSucces = {
  distance: 100.0,
  message: ['este', '', '', 'mensaje', '', 'es', 'este', '', 'secreto', 'un'],
};

export const mockNotFoundSatelite = {
  status: 404,
  message: 'No se encuentra esté satelite kenobiiii',
};

export const mockNotFounMessage = {
  status: 404,
  message: 'No se ha encontrado el mensaje',
};

export const mockMessageErrorNotExistSatellite =
  'No se encuentra esté satelite';

export const mockmessageIncorrect = [
  ['este', '', '', 'mensaje', '', 'es', 'este', '', '', 'un'],
];

export const mockMessageCorrect = [
  ['este', '', '', 'mensaje', '', 'es', 'este', '', '', 'un'],
  ['este', '', '', 'mensaje', '', 'es', 'este', '', '', 'un'],
  ['este', '', '', 'mensaje', '', 'es', 'este', '', 'secreto', 'un'],
];

export const mockMessageCompleteRes = 'este es un mensaje secreto';

export const mockPositionCompleteRes = {
  x: -487.28591250000005,
  y: 1557.0142250000004,
};

export const mockSateliteIncorrect = [
  {
    sateliteName: 'kenobiiii',
    distance: 100.0,
  },
];

export const mockSateliteCorrect = [
  {
    sateliteName: 'kenobi',
    distance: 100.0,
  },
];

export const mockResponseTopOnly = {
  position: { x: -481.25, y: 1537.5 },
  message: 'este es un mensaje secreto',
}

export const mockresponseTopSecret = {
  message: 'este es un mensaje secreto',
  position: { x: -487.28591250000005, y: 1557.0142250000004 },
};
