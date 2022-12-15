import MoodEntry from '../../types/MoodEntry';
import mapMoodEntriesToMoodChartData, {
  groupEntriesByFeelings,
  mapEntriesByFeelingsToMoodEntryGroup,
} from '../mapMoodEntriesToMoodChartData';

const entries: MoodEntry[] = [
  {
    feelings: ['frustrated', 'meh'],
    moodLevel: 1,
  },
  {
    feelings: ['meh', 'content'],
    moodLevel: 2,
  },
];

describe('mapMoodEntriesToMoodChartData', () => {
  it('should group MoodEntries by Feelings', () => {
    const result = groupEntriesByFeelings(entries);

    expect(result).toMatchInlineSnapshot(`
      {
        "content": [
          {
            "feelings": [
              "meh",
              "content",
            ],
            "moodLevel": 2,
          },
        ],
        "frustrated": [
          {
            "feelings": [
              "frustrated",
              "meh",
            ],
            "moodLevel": 1,
          },
        ],
        "meh": [
          {
            "feelings": [
              "frustrated",
              "meh",
            ],
            "moodLevel": 1,
          },
          {
            "feelings": [
              "meh",
              "content",
            ],
            "moodLevel": 2,
          },
        ],
      }
    `);
  });

  it('should map MoodEntries grouped by Feelings into sorted MoodEntryGroups', () => {
    const entriesByFeelings = groupEntriesByFeelings(entries);

    const result = mapEntriesByFeelingsToMoodEntryGroup(entriesByFeelings);

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "entries": [
            {
              "feelings": [
                "frustrated",
                "meh",
              ],
              "moodLevel": 1,
            },
          ],
          "feeling": "frustrated",
        },
        {
          "entries": [
            {
              "feelings": [
                "frustrated",
                "meh",
              ],
              "moodLevel": 1,
            },
            {
              "feelings": [
                "meh",
                "content",
              ],
              "moodLevel": 2,
            },
          ],
          "feeling": "meh",
        },
        {
          "entries": [
            {
              "feelings": [
                "meh",
                "content",
              ],
              "moodLevel": 2,
            },
          ],
          "feeling": "content",
        },
      ]
    `);
  });

  it('should match MoodEntries to MoodChartData', () => {
    const result = mapMoodEntriesToMoodChartData(entries);

    expect(result).toMatchInlineSnapshot(`
      {
        "largestGroupLength": 2,
        "moodEntryGroups": [
          {
            "entries": [
              {
                "feelings": [
                  "frustrated",
                  "meh",
                ],
                "moodLevel": 1,
              },
              {
                "feelings": [
                  "meh",
                  "content",
                ],
                "moodLevel": 2,
              },
            ],
            "feeling": "meh",
          },
          {
            "entries": [
              {
                "feelings": [
                  "frustrated",
                  "meh",
                ],
                "moodLevel": 1,
              },
            ],
            "feeling": "frustrated",
          },
          {
            "entries": [
              {
                "feelings": [
                  "meh",
                  "content",
                ],
                "moodLevel": 2,
              },
            ],
            "feeling": "content",
          },
        ],
      }
    `);
  });
});
