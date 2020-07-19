import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

    titulo: {
        textAlign:'center',
        color: 'blue'
    },

    padding3:  {
        padding: '30px'
    }
})

const Sobre = () => {

    const styles = useStyles();

    return (
        <Fragment>
            <Header />
            <Container maxWidth= 'md' className= {styles.padding3}>
                <Typography variant='h1' className= {styles.titulo} component='h1'>Sobre</Typography>
                <Typography>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a arcu a tortor ultricies blandit. Nullam aliquam felis in est suscipit pellentesque. Mauris volutpat mattis neque ac condimentum. Morbi vel blandit arcu. Integer vehicula lectus id mi euismod lobortis et at lacus. Proin iaculis purus non faucibus mattis. Praesent pulvinar urna id ante molestie, vitae porttitor diam sodales. Phasellus in lectus mattis, viverra elit nec, accumsan nisi.

                    Ut in tincidunt odio, vitae commodo nibh. Nam tincidunt est tellus, id efficitur ipsum facilisis vel. Vestibulum lobortis, nisi vel varius sagittis, risus est mattis ante, eu consectetur nibh nisl ac purus. Duis pellentesque enim vel blandit ullamcorper. Proin bibendum justo velit, dignissim gravida justo suscipit id. Aliquam tincidunt malesuada neque, in luctus ex feugiat id. Donec vitae mi eu tellus tristique condimentum id gravida ex. Nullam hendrerit, ante sit amet rhoncus mattis, orci tellus cursus elit, quis euismod justo lorem pellentesque sem.

                    Maecenas bibendum lobortis ex. Mauris lobortis auctor nisi, id ultrices erat interdum sed. Praesent porttitor, lacus sed consectetur commodo, dolor velit vestibulum dolor, molestie aliquet lorem eros nec ante. Ut at pharetra urna, nec feugiat arcu. Sed dignissim ex et sodales aliquet. Duis pellentesque dapibus justo, eget dignissim sem lacinia nec. Nam non arcu vitae erat dapibus suscipit ut id arcu. Nunc ut tempus dui. Maecenas eleifend sit amet nisi et aliquam. Quisque consequat velit placerat metus aliquam, vitae dictum arcu tempus. Ut ac urna vitae lectus feugiat scelerisque nec id velit. Donec a libero at tellus semper ornare vel non justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel augue dapibus ante porta sollicitudin non sed diam. Donec vestibulum nulla ac orci posuere maximus. Maecenas diam purus, efficitur eget lorem eget, scelerisque facilisis nulla.

                    In bibendum, enim ut luctus ullamcorper, eros sem porta libero, vel maximus mi ex eu dolor. Etiam at magna vel ligula accumsan viverra. Morbi vitae ullamcorper sem, nec varius tellus. Nam faucibus nec nulla vitae tincidunt. Aliquam et risus tortor. Fusce ultricies risus at nulla bibendum imperdiet. Morbi vulputate euismod tincidunt. Quisque enim justo, rutrum eget sapien nec, tincidunt maximus turpis. Aenean non malesuada justo, porta luctus libero.

                    Praesent laoreet pellentesque laoreet. Ut interdum et mi sit amet scelerisque. Phasellus sollicitudin tincidunt mauris. Cras vitae volutpat eros. Mauris convallis dictum odio fermentum dignissim. Curabitur dictum, odio ac accumsan mattis, urna turpis porttitor nisi, sit amet mollis diam nunc at justo. Quisque scelerisque, urna sit amet ullamcorper aliquet, leo turpis tempor ex, at faucibus nunc urna eget dolor. Maecenas eu laoreet purus, eu ornare massa. Sed in aliquet enim, et tempor lacus. Aenean tincidunt vel odio quis molestie. Sed sollicitudin convallis lectus ac feugiat.
                </Typography>
            </Container>
        </Fragment>
    );
}
export default Sobre;