import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Alumno(props) {
  return (
    <View style={estilos.contenedor}>
      <Pressable style={estilos.boton} onPress={props.onPress}>
        <Text style={estilos.nombre}>{props.nombre}</Text>
        <Text style={estilos.matricula}>Matricula: {props.matricula}</Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    marginBottom: 10,
  },
  boton: {
    backgroundColor: "#ecd96e",
    borderRadius: 10,
    padding: 12,
    elevation: 2,
  },
  nombre: {
    fontWeight: "700",
    color: "#111827",
    fontSize: 13,
    marginBottom: 4,
  },
  matricula: {
    color: "#374151",
    fontSize: 12,
  },
});