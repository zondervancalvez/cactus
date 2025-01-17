/*
Hyperledger Cacti Plugin - Connector Corda

Can perform basic tasks on a Corda ledger

API version: 2.1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cactus-plugin-ledger-connector-corda

import (
	"encoding/json"
)

// checks if the DeployContractJarsSuccessV1Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DeployContractJarsSuccessV1Response{}

// DeployContractJarsSuccessV1Response struct for DeployContractJarsSuccessV1Response
type DeployContractJarsSuccessV1Response struct {
	DeployedJarFiles []string `json:"deployedJarFiles"`
}

// NewDeployContractJarsSuccessV1Response instantiates a new DeployContractJarsSuccessV1Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDeployContractJarsSuccessV1Response(deployedJarFiles []string) *DeployContractJarsSuccessV1Response {
	this := DeployContractJarsSuccessV1Response{}
	this.DeployedJarFiles = deployedJarFiles
	return &this
}

// NewDeployContractJarsSuccessV1ResponseWithDefaults instantiates a new DeployContractJarsSuccessV1Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDeployContractJarsSuccessV1ResponseWithDefaults() *DeployContractJarsSuccessV1Response {
	this := DeployContractJarsSuccessV1Response{}
	return &this
}

// GetDeployedJarFiles returns the DeployedJarFiles field value
func (o *DeployContractJarsSuccessV1Response) GetDeployedJarFiles() []string {
	if o == nil {
		var ret []string
		return ret
	}

	return o.DeployedJarFiles
}

// GetDeployedJarFilesOk returns a tuple with the DeployedJarFiles field value
// and a boolean to check if the value has been set.
func (o *DeployContractJarsSuccessV1Response) GetDeployedJarFilesOk() ([]string, bool) {
	if o == nil {
		return nil, false
	}
	return o.DeployedJarFiles, true
}

// SetDeployedJarFiles sets field value
func (o *DeployContractJarsSuccessV1Response) SetDeployedJarFiles(v []string) {
	o.DeployedJarFiles = v
}

func (o DeployContractJarsSuccessV1Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DeployContractJarsSuccessV1Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["deployedJarFiles"] = o.DeployedJarFiles
	return toSerialize, nil
}

type NullableDeployContractJarsSuccessV1Response struct {
	value *DeployContractJarsSuccessV1Response
	isSet bool
}

func (v NullableDeployContractJarsSuccessV1Response) Get() *DeployContractJarsSuccessV1Response {
	return v.value
}

func (v *NullableDeployContractJarsSuccessV1Response) Set(val *DeployContractJarsSuccessV1Response) {
	v.value = val
	v.isSet = true
}

func (v NullableDeployContractJarsSuccessV1Response) IsSet() bool {
	return v.isSet
}

func (v *NullableDeployContractJarsSuccessV1Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDeployContractJarsSuccessV1Response(val *DeployContractJarsSuccessV1Response) *NullableDeployContractJarsSuccessV1Response {
	return &NullableDeployContractJarsSuccessV1Response{value: val, isSet: true}
}

func (v NullableDeployContractJarsSuccessV1Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDeployContractJarsSuccessV1Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


