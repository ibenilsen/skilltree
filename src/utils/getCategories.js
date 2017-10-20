import _ from 'lodash';

export default function getCategories(tasks): string {
  let result = {}
  _.forEach(tasks, (task) => {
    _.forEach(task.tags, (tag) => {
      if(result[tag.name]) {
        result[tag.name]['total'] += tag.value
      } else {
        result[tag.name] = {total: tag.value, name: tag.name, completed: 0}
      }
      if(task.completed) {
        if(result[tag.name]) {
          result[tag.name]['completed'] += tag.value
        } else {
          result[tag.name] = {total: tag.value, name: tag.name, completed: tag.value}
        }
      }
    })
  })
  return Object.values(result);
}
