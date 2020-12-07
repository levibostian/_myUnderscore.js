/**
 * Sort date array in order: [older date, newer date].
 *
 * Use:
 * ```
 * const dates: Date[] = []
 * dates.sort(_.date.sortOldToNew)
 *
 * const nestedDates: {date: Date}[] = []
 * nestedDates.sort((first, second) => _.date.sortOldToNew(first.date, second.date))
 * ```
 */
const _dateSortOldToNew = (first: Date, second: Date): number => {
  return first.getTime() - second.getTime()
}

export default _dateSortOldToNew
