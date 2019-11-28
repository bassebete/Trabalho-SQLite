import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Database from '../../Database';

const db = new Database();

export default class ContactAddScreen extends Component {
  static navigationOptions = {
    title: 'Adicionar Contatos',
  };

  constructor() {
    super();
    this.state = {
      contId: '',
      contName: '',
      contDesc: '',
      contImage: '',
      contNum: '',
      isLoading: false,
    };
  }

  saveContact() {
    this.setState({
      isLoading: true,
    });
    let data = {
      contId: this.state.contId,
      contName: this.state.contName,
      contDesc: this.state.contDesc,
      contImage: this.state.contImage,
      contNum: this.state.contNum
    }
    db.addContact(data).then((result) => {
      console.log(result);
      this.setState({
        isLoading: false,
      });
      this.props.navigation.state.params.onNavigateBack;
      this.props.navigation.goBack();
    }).catch((err) => {
      console.log(err);
      this.setState({
        isLoading: false,
      });
    })
  }

  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text;
    this.setState(state);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.subContainer}>
          <TextInput
            placeholder={'ID do Contato'}
            value={this.state.contId}
            onChangeText={(text) => this.updateTextInput(text, 'contId')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            placeholder={'Nome do Contato'}
            value={this.state.contName}
            onChangeText={(text) => this.updateTextInput(text, 'contName')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder={'Descrição do Contato'}
            value={this.state.contDesc}
            onChangeText={(text) => this.updateTextInput(text, 'contDesc')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            placeholder={'Imagem do Contato'}
            value={this.state.contImage}
            onChangeText={(text) => this.updateTextInput(text, 'contImage')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            placeholder={'Numero'}
            value={this.state.contNum}
            keyboardType='numeric'
            onChangeText={(text) => this.updateTextInput(text, 'contNum')}
          />
        </View>
        <View style={styles.button}>
          <Button
            large
            leftIcon={{ name: 'save' }}
            title='Salvar'
            onPress={() => this.saveContact()} />
        </View>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  subContainer: {
    flex: 1,
    marginBottom: 20,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
