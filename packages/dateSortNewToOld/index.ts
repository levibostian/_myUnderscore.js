/**
 * Sort date array in order: [newer date, older date].
 *
 * Use:
 * ```
 * const dates: Date[] = []
 * dates.sort(_.date.sortNewToOld)
 *
 * const nestedDates: {date: Date}[] = []
 * nestedDates.sort((first, second) => _.date.sortNewToOld(first.date, second.date))
 * ```
 */
const _dateSortNewToOld = (first: Date, second: Date): number => {
  return second.getTime() - first.getTime()
}

export default _dateSortNewToOld
