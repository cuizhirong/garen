import commonModal from 'client/components/modal_common/index';
import config from './config.json';
import __ from 'locale/client/dashboard.lang.json';
import moment from 'moment';

function pop(parent, callback) {
  let props = {
    __: __,
    parent: parent,
    config: config,
    onInitialize: function(refs) {
      //let contents = [];
      const options = [{
        value: 'instance',
        label: ['instance'],
        children: [{
          value: 'volume',
          label: ['volume'],
          children: [{
            value: 'network',
            label: ['network'],
          }],
        }],
      }, {
        value: 'subnet',
        label: ['subnet'],
        children: [{
          value: 'port',
          label: ['port'],
          children: [{
            value: 'image',
            label: ['image'],
          }],
        }],
      }];

      refs.instance.setState({
        data: options
      });

      const dateFormat = 'YYYY/MM/DD';

      refs.volume.setState({
        value: moment('2015/01/01', dateFormat)
      });

      refs.network.setState({
        hide: false
      });

      refs.subnet.setState({
        min: 2,
        max: 12
      });

      const RadioData = [{
        id: 1,
        name: 1
      }, {
        id: 2,
        name: 2
      }, {
        id: 3,
        name: 3
      }];

      refs.router.setState({
        data: RadioData,
        value: RadioData[2].id
      });

      const SelectData = [{
        id: 11,
        name: 11
      }, {
        id: 12,
        name: 12
      }, {
        id: 13,
        name: 13
      }];

      refs.image.setState({
        data: SelectData,
        value: SelectData[1].id
      });

      const optionGroups = [{
        name: 'Manager',
        id: 21,
        children: [{
          name: 'Jack',
          id: 22
        }, {
          name: 'Lucy',
          id: 23
        }]
      }, {
        name: 'Engineer',
        id: 31,
        children: [{
          name: 'Yiminghe',
          id: 32
        }]
      }];

      refs.alarm.setState({
        data: optionGroups,
        value: optionGroups[0].children[0].id
      });
    },
    onConfirm: function(refs, cb) {
      cb(false, 'errorMessage');
    },
    onAction: function(filed, state, refs) {
      switch (filed) {
        case 'cascader':
          //console.log('cascader: ', refs.cascader.state.value);
          break;
        case 'input':
          //console.log('input: ', refs.input.state.value)
          break;
        case 'textarea':
          //console.log('textarea: ', refs.textarea.state.value);
          break;
        case 'searchInput':
          //console.log('searchInput: ', refs.searchInput.state.value);
          break;
        case 'groupInput':
          //console.log('groupInput: ', refs.groupInput.state)
          break;
        case 'inputNumber':
          //console.log('inputNumber: ', refs.inputNumber.state.value)
          break;
        case 'radio':
          //console.log('radio: ', refs.radio.state)
          break;
        case 'volume':
          //console.log('datePicker: ', refs.volume.state)
          break;
        default:
          break;
      }
    }
  };

  commonModal(props);
}

export default pop;

/*
{
    "type": "steps",
    "field": "steps",
    "title": ["0", "1", "2"],
    "description": ["progressDot"],
    "size": "small",
    "icons": ["user"],
    "progressDot": false
  }, */
