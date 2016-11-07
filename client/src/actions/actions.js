import * as types from './actionTypes';

export function addTaskActionCreator(task) {
  return {
    type: types.ADD_TASK,
    payload: task
  }
} 

export function updateInputActionCreator(taskName) {
  return {
    type: types.UPDATE_INPUT,
    payload: taskName
  }
} 

export function deleteTaskActionCreator(index) {
  return {
    type: types.DELETE_TASK,
    payload: index
  }
} 

export function markCompletedCreator(index) {
  return {
    type: types.MARK_COMPLETED,
    payload: index
  }
} 
