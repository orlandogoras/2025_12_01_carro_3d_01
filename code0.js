gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDRoad_95953DObjects1= [];
gdjs.Game_32SceneCode.GDRoad_95953DObjects2= [];
gdjs.Game_32SceneCode.GDSkyboxObjects1= [];
gdjs.Game_32SceneCode.GDSkyboxObjects2= [];
gdjs.Game_32SceneCode.GDGrass_95953DObjects1= [];
gdjs.Game_32SceneCode.GDGrass_95953DObjects2= [];
gdjs.Game_32SceneCode.GDPlayerCarObjects1= [];
gdjs.Game_32SceneCode.GDPlayerCarObjects2= [];
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects1= [];
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects2= [];
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects1= [];
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects2= [];
gdjs.Game_32SceneCode.GDTrafficConeObjects1= [];
gdjs.Game_32SceneCode.GDTrafficConeObjects2= [];
gdjs.Game_32SceneCode.GDPig_95953DObjects1= [];
gdjs.Game_32SceneCode.GDPig_95953DObjects2= [];
gdjs.Game_32SceneCode.GDPuntaje_9595TextObjects1= [];
gdjs.Game_32SceneCode.GDPuntaje_9595TextObjects2= [];
gdjs.Game_32SceneCode.GD_9595muroObjects1= [];
gdjs.Game_32SceneCode.GD_9595muroObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerCarObjects1Objects = Hashtable.newFrom({"PlayerCar": gdjs.Game_32SceneCode.GDPlayerCarObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTrafficConeObjects1Objects = Hashtable.newFrom({"TrafficCone": gdjs.Game_32SceneCode.GDTrafficConeObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.Game_32SceneCode.GDPlayerCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("TrafficCone"), gdjs.Game_32SceneCode.GDTrafficConeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerCarObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTrafficConeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Puntaje_Text"), gdjs.Game_32SceneCode.GDPuntaje_9595TextObjects1);
/* Reuse gdjs.Game_32SceneCode.GDTrafficConeObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrafficConeObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrafficConeObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(500);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPuntaje_9595TextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPuntaje_9595TextObjects1[i].getBehavior("Text").setText("Puntaje: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "impacto_02.mp3", false, 100, 1);
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.Game_32SceneCode.GDPlayerCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Puntaje_Text"), gdjs.Game_32SceneCode.GDPuntaje_9595TextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPuntaje_9595TextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPuntaje_9595TextObjects1[i].getBehavior("Text").setText("Puntaje: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tiempo");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerCarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerCarObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerCarObjects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.Game_32SceneCode.GDPlayerCarObjects1[i].getX()));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerCarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerCarObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerCarObjects1[i].getVariables().getFromIndex(1)).setNumber((gdjs.Game_32SceneCode.GDPlayerCarObjects1[i].getY()));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerCarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerCarObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerCarObjects1[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerCar"), gdjs.Game_32SceneCode.GDPlayerCarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerCarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerCarObjects1[i].setPosition(gdjs.Game_32SceneCode.GDPlayerCarObjects1[i].getVariables().getFromIndex(0).getAsNumber(),gdjs.Game_32SceneCode.GDPlayerCarObjects1[i].getVariables().getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerCarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerCarObjects1[i].getBehavior("Object3D").setZ(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDRoad_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDRoad_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerCarObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerCarObjects2.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDTrafficConeObjects1.length = 0;
gdjs.Game_32SceneCode.GDTrafficConeObjects2.length = 0;
gdjs.Game_32SceneCode.GDPig_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDPig_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDPuntaje_9595TextObjects1.length = 0;
gdjs.Game_32SceneCode.GDPuntaje_9595TextObjects2.length = 0;
gdjs.Game_32SceneCode.GD_9595muroObjects1.length = 0;
gdjs.Game_32SceneCode.GD_9595muroObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDRoad_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDRoad_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerCarObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerCarObjects2.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpeed_9595JoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDSteer_9595JoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDTrafficConeObjects1.length = 0;
gdjs.Game_32SceneCode.GDTrafficConeObjects2.length = 0;
gdjs.Game_32SceneCode.GDPig_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDPig_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDPuntaje_9595TextObjects1.length = 0;
gdjs.Game_32SceneCode.GDPuntaje_9595TextObjects2.length = 0;
gdjs.Game_32SceneCode.GD_9595muroObjects1.length = 0;
gdjs.Game_32SceneCode.GD_9595muroObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
