import React from 'react';
import { Mysql, Oracle, CLang, CPlusPlus, CSharp, GoLang, Java, JavaScript, Kotlin, Python2, Python3, Ruby, Scala, Swift } from '../media/svg/SvgIcon';

const Svg = (props) => {
    
    const type = props.val.toUpperCase();

    switch (type) {
      case "MYSQL":
        return <Mysql />;
      case "ORACLE":
        return <Oracle />;
      case "CPP":
        return <CPlusPlus />;
      case "C":
        return <CLang />;
      case "CSHARP":
        return <CSharp />;
      case "GO":
        return <GoLang />;
      case "JAVA":
        return <Java />;
      case "JAVASCRIPT":
        return <JavaScript />;
      case "KOTLIN":
        return <Kotlin />;
      case "PYTHON2":
        return <Python2 />;
      case "PYTHON3":
        return <Python3 />;
      case "RUBY":
        return <Ruby />;
      case "SCALA":
        return <Scala />;
    case "SWIFT":
        return <Swift />;
      default:
        return null;
    }
};

export default Svg;