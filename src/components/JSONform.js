/**
 * Happy Hacking
 * Created by leiyouwho on 5/5/2016.
 */

import React, { PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import SchemaField from './fields/SchemaField';
import TitleField from './fields/TitleField';

export default class JSONform extends React.Component {
  static propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object,
    formData: PropTypes.any,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    SchemaField: PropTypes.any,
    TitleField: PropTypes.any,
  }
  static defaultProps = {
    uiSchema: {},
  }
  componentWillUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  getRegistry() {
    // For BC, accept passed SchemaField and TitleField props and pass them to
    // the "fields" registry one.
    const _SchemaField = this.props.SchemaField || SchemaField;
    const _TitleField = this.props.TitleField || TitleField;
    const fields = Object.assign({
      SchemaField: _SchemaField,
      TitleField: _TitleField,
    }, this.props.fields);
    return {
      fields,
      widgets: this.props.widgets || {},
      definitions: this.props.jsonSchema.definitions || {},
    };
  }

  render() {
    const registry = this.getRegistry();
    const _SchemaField = registry.fields.SchemaField;
    return (
      <from
        className="rjsf"
        onSubmit={this.props.onSubmit}
      >
        {/* render Errors */}
        <_SchemaField
          schema={this.props.jsonSchema}
          uiSchema={this.props.uiSchema}
          // errorSchema={errorSchema}
          // idSchema={idSchema}
          // formData={formData}
          onChange={this.props.onChange}
          registry={registry}
          // safeRenderCompletion={safeRenderCompletion}
        />
        { this.props.children ? this.props.children :
          <p>
            <button type="submit" className="btn btn-info">提交</button>
          </p>
        }
      </from>
    );
  }
}
