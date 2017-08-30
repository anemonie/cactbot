// O2S - Deltascape 2.0 Savage
[{
  zoneRegex: /(Deltascape V4.0 \(Savage\)|Unknown Zone \(2B8\))/,
  triggers: [
    {
      regex: /:([A-Za-z ']+) gains the effect of (Unknown_556|Levitation) from/,
      run: function(data) { data.levitating = true; },
      condition: function(data, matches) { return matches[1] == data.me; },
    },
    {
      regex: /:([A-Za-z ']+) loses the effect of (Unknown_556|Levitation)/,
      run: function(data) { data.levitating = false; },
    },
    {
      regex: /:235E:Catastrophe starts using/,
      infoText: '-100 Gs: Go north/south and look away',
    },
    {
      regex: /:236F:Catastrophe starts using/,
      alarmText: 'Death\'s Gaze: Look away',
    },
    {
      regex: /:2374:Catastrophe starts using/,
      infoText: function(data) { if (data.levitating) return 'Earthquake'; },
      alertText: function(data) { if (!data.levitating) return 'Earthquake: Levitate'; },
    },
    {
      regex: /:([A-Za-z ']+) gains the effect of (Unknown_54E|Elevated) from/,
      alertText: 'Elevated: DPS up, Tanks & Healers down',
    },
    {
      regex: /:2372:Catastrophe starts usinge/,
      infoText: 'Gravitational Wave: AOE damage',
      condition: function(data) { return data.role == 'healer'; },
    },
    {
      regex: /:235A:Catastrophe starts using/,
      infoText: function(data) {
        var dpsProbe = data.probeCount == 1 || data.probeCount == 3;
        if (dpsProbe != data.role.startsWith('dps')) {
          if (!dpsProbe) return 'Maniacal Probe: Tanks & Healers';
          else return 'Maniacal Probe: DPS';
        }
      },
      alertText: function(data) {
        var dpsProbe = data.probeCount == 1 || data.probeCount == 3;
        if (dpsProbe == data.role.startsWith('dps')) {
          data.myProbe = true;
          if (!dpsProbe) return 'Maniacal Probe: Tanks & Healers';
          else return 'Maniacal Probe: DPS';
        }
      },
      run: function(data) { data.probeCount = (data.probeCount || 0) + 1; },
    },
    {
      regex: /:([A-Za-z ']+) gains the effect of Unstable Gravity from/,
      delaySeconds: 9,
      infoText: function(data) { if (!data.myProbe) return 'Unstable Gravity: Stack'; },
      alarmText: function(data) { if (data.myProbe) return 'Unstable Gravity: Elevate and outside stack'; },
      run: function(data) { data.myProbe = false; },
      condition: function(data, matches) { return matches[1] == data.me && data.myProbe; },
    },
    {
      regex: /:([A-Za-z ']+) gains the effect of 6 Fulms Under from/,
      delaySeconds: 5,
      infoText: function(data) { if (data.levitating) return '6 Fulms Under'; },
      alertText: function(data) { if (!data.levitating) return '6 Fulms Under: Levitate'; },
      condition: function(data, matches) { return matches[1] == data.me; },
    },
  ]
}]