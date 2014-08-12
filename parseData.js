var fs = require('fs')
		, connection = require ('./connection');

var data = fs.readFileSync("data.txt").toString().trim();

var lines = data.split('\n');

var splitLines = [];

for (var i = 0; i < lines.length; i++) {
	var fields = lines[i].split('\t');
	splitLines.push(fields);
}

for (var i = 0; i < splitLines.length; i += 1) {
	var patient = getPatientData(splitLines[i]);

	connection.query('INSERT INTO users SET ?', getPatientData(splitLines[i]), function(err, result) {
		if (err && err.errno != 1062)
			console.log(err);
	});

	connection.query('INSERT INTO scans SET ?', getScanData(splitLines[i]), function(err, result) {
		if (err)
			console.log(err);
	});
}

function formatDateString(date) {
	var parts = date.split('/');

	return parts[2] + '-' + parts[0] + '-' + parts[1];
}

function getPatientData(array) {
	var patient = {};

	patient.LastName = trimIfExists(array[0]);
	patient.FirstName = trimIfExists(array[1]);
	patient.PatientID = trimIfExists(array[2]);
	patient.MostRecentMeasurementDate = formatDateString(trimIfExists(array[3]));
	patient.Gender = trimIfExists(array[4]);
	patient.Ethnicity = trimIfExists(array[5]);
	patient.HeightInches = trimIfExists(array[6]);
	patient.Weight = trimIfExists(array[7]);

	return patient;
}

function trimIfExists(value) {
	if (value)
		value = value.trim();

	return value;
}

function getScanData(array) {
	var scan = {};

	scan.PatientID = trimIfExists(array[2]);
	scan.MeasureDate = formatDateString(trimIfExists(array[8]));
	scan.Age = trimIfExists(array[9]);
	scan.Dose = trimIfExists(array[10]);
	scan.HeightatExam = trimIfExists(array[11]);
	scan.WeightatExam = trimIfExists(array[12]);
	scan.BMI = trimIfExists(array[13]);
	scan.ArmsBoneMass = trimIfExists(array[14]);
	scan.ArmRightBoneMass = trimIfExists(array[15]);
	scan.ArmLeftBoneMass = trimIfExists(array[16]);
	scan.ArmsDiffBoneMass = trimIfExists(array[17]);
	scan.LegsBoneMass = trimIfExists(array[18]);
	scan.LegRightBoneMass = trimIfExists(array[19]);
	scan.LegLeftBoneMass = trimIfExists(array[20]);
	scan.LegsDiffBoneMass = trimIfExists(array[21]);
	scan.TrunkBoneMass = trimIfExists(array[22]);
	scan.TrunkRightBoneMass = trimIfExists(array[23]);
	scan.TrunkLeftBoneMass = trimIfExists(array[24]);
	scan.TrunkDiffBoneMass = trimIfExists(array[25]);
	scan.AndroidBoneMass = trimIfExists(array[26]);
	scan.GynoidBoneMass = trimIfExists(array[27]);
	scan.TotalBoneMass = trimIfExists(array[28]);
	scan.TotalRightBoneMass = trimIfExists(array[29]);
	scan.TotalLeftBoneMass = trimIfExists(array[30]);
	scan.TotalDiffBoneMass = trimIfExists(array[31]);
	scan.ArmsFatMass = trimIfExists(array[32]);
	scan.ArmRightFatMass = trimIfExists(array[33]);
	scan.ArmLeftFatMass = trimIfExists(array[34]);
	scan.ArmsDiffFatMass = trimIfExists(array[35]);
	scan.LegsFatMass = trimIfExists(array[36]);
	scan.LegRightFatMass = trimIfExists(array[37]);
	scan.LegLeftFatMass = trimIfExists(array[38]);
	scan.LegsDiffFatMass = trimIfExists(array[39]);
	scan.TrunkFatMass = trimIfExists(array[40]);
	scan.TrunkRightFatMass = trimIfExists(array[41]);
	scan.TrunkLeftFatMass = trimIfExists(array[42]);
	scan.TrunkDiffFatMass = trimIfExists(array[43]);
	scan.AndroidFatMass = trimIfExists(array[44]);
	scan.GynoidFatMass = trimIfExists(array[45]);
	scan.TotalFatMass = trimIfExists(array[46]);
	scan.TotalRightFatMass = trimIfExists(array[47]);
	scan.TotalLeftFatMass = trimIfExists(array[48]);
	scan.TotalDiffFatMass = trimIfExists(array[49]);
	scan.ArmsLeanMass = trimIfExists(array[50]);
	scan.ArmRightLeanMass = trimIfExists(array[51]);
	scan.ArmLeftLeanMass = trimIfExists(array[52]);
	scan.ArmsDiffLeanMass = trimIfExists(array[53]);
	scan.LegsLeanMass = trimIfExists(array[54]);
	scan.LegRightLeanMass = trimIfExists(array[55]);
	scan.LegLeftLeanMass = trimIfExists(array[56]);
	scan.LegsDiffLeanMass = trimIfExists(array[57]);
	scan.TrunkLeanMass = trimIfExists(array[58]);
	scan.TrunkRightLeanMass = trimIfExists(array[59]);
	scan.TrunkLeftLeanMass = trimIfExists(array[60]);
	scan.TrunkDiffLeanMass = trimIfExists(array[61]);
	scan.AndroidLeanMass = trimIfExists(array[62]);
	scan.GynoidLeanMass = trimIfExists(array[63]);
	scan.TotalLeanMass = trimIfExists(array[64]);
	scan.TotalRightLeanMass = trimIfExists(array[65]);
	scan.TotalLeftLeanMass = trimIfExists(array[66]);
	scan.TotalDiffLeanMass = trimIfExists(array[67]);
	scan.ArmsTissueMass = trimIfExists(array[68]);
	scan.ArmRightTissueMass = trimIfExists(array[69]);
	scan.ArmLeftTissueMass = trimIfExists(array[70]);
	scan.ArmsDiffTissueMass = trimIfExists(array[71]);
	scan.LegsTissueMass = trimIfExists(array[72]);
	scan.LegRightTissueMass = trimIfExists(array[73]);
	scan.LegLeftTissueMass = trimIfExists(array[74]);
	scan.LegsDiffTissueMass = trimIfExists(array[75]);
	scan.TrunkTissueMass = trimIfExists(array[76]);
	scan.TrunkRightTissueMass = trimIfExists(array[77]);
	scan.TrunkLeftTissueMass = trimIfExists(array[78]);
	scan.TrunkDiffTissueMass = trimIfExists(array[79]);
	scan.AndroidTissueMass = trimIfExists(array[80]);
	scan.GynoidTissueMass = trimIfExists(array[81]);
	scan.TotalTissueMass = trimIfExists(array[82]);
	scan.TotalRightTissueMass = trimIfExists(array[83]);
	scan.TotalLeftTissueMass = trimIfExists(array[84]);
	scan.TotalDiffTissueMass = trimIfExists(array[85]);
	scan.ArmsFatFreeMass = trimIfExists(array[86]);
	scan.ArmRightFatFreeMass = trimIfExists(array[87]);
	scan.ArmLeftFatFreeMass = trimIfExists(array[88]);
	scan.ArmsDiffFatFreeMass = trimIfExists(array[89]);
	scan.LegsFatFreeMass = trimIfExists(array[90]);
	scan.LegRightFatFreeMass = trimIfExists(array[91]);
	scan.LegLeftFatFreeMass = trimIfExists(array[92]);
	scan.LegsDiffFatFreeMass = trimIfExists(array[93]);
	scan.TrunkFatFreeMass = trimIfExists(array[94]);
	scan.TrunkRightFatFreeMass = trimIfExists(array[95]);
	scan.TrunkLeftFatFreeMass = trimIfExists(array[96]);
	scan.TrunkDiffFatFreeMass = trimIfExists(array[97]);
	scan.AndroidFatFreeMass = trimIfExists(array[98]);
	scan.GynoidFatFreeMass = trimIfExists(array[99]);
	scan.TotalFatFreeMass = trimIfExists(array[100]);
	scan.TotalRightFatFreeMass = trimIfExists(array[101]);
	scan.TotalLeftFatFreeMass = trimIfExists(array[102]);
	scan.TotalDiffFatFreeMass = trimIfExists(array[103]);
	scan.ArmsTotalMass = trimIfExists(array[104]);
	scan.ArmRightTotalMass = trimIfExists(array[105]);
	scan.ArmLeftTotalMass = trimIfExists(array[106]);
	scan.ArmsDiffTotalMass = trimIfExists(array[107]);
	scan.LegsTotalMass = trimIfExists(array[108]);
	scan.LegRightTotalMass = trimIfExists(array[109]);
	scan.LegLeftTotalMass = trimIfExists(array[110]);
	scan.LegsDiffTotalMass = trimIfExists(array[111]);
	scan.TrunkTotalMass = trimIfExists(array[112]);
	scan.TrunkRightTotalMass = trimIfExists(array[113]);
	scan.TrunkLeftTotalMass = trimIfExists(array[114]);
	scan.TrunkDiffTotalMass = trimIfExists(array[115]);
	scan.AndroidTotalMass = trimIfExists(array[116]);
	scan.GynoidTotalMass = trimIfExists(array[117]);
	scan.TotalTotalMass = trimIfExists(array[118]);
	scan.TotalRightTotalMass = trimIfExists(array[119]);
	scan.TotalLeftTotalMass = trimIfExists(array[120]);
	scan.TotalDiffTotalMass = trimIfExists(array[121]);
	scan.ArmsRegionPercentFat = trimIfExists(array[122]);
	scan.ArmRightRegionPercentFat = trimIfExists(array[123]);
	scan.ArmLeftRegionPercentFat = trimIfExists(array[124]);
	scan.ArmsDiffRegionPercentFat = trimIfExists(array[125]);
	scan.LegsRegionPercentFat = trimIfExists(array[126]);
	scan.LegRightRegionPercentFat = trimIfExists(array[127]);
	scan.LegLeftRegionPercentFat = trimIfExists(array[128]);
	scan.LegsDiffRegionPercentFat = trimIfExists(array[129]);
	scan.TrunkRegionPercentFat = trimIfExists(array[130]);
	scan.TrunkRightRegionPercentFat = trimIfExists(array[131]);
	scan.TrunkLeftRegionPercentFat = trimIfExists(array[132]);
	scan.TrunkDiffRegionPercentFat = trimIfExists(array[133]);
	scan.AndroidRegionPercentFat = trimIfExists(array[134]);
	scan.GynoidRegionPercentFat = trimIfExists(array[135]);
	scan.TotalRegionPercentFat = trimIfExists(array[136]);
	scan.TotalRightRegionPercentFat = trimIfExists(array[137]);
	scan.TotalLeftRegionPercentFat = trimIfExists(array[138]);
	scan.TotalDiffRegionPercentFat = trimIfExists(array[139]);
	scan.ArmsTissuePercentFat = trimIfExists(array[140]);
	scan.ArmRightTissuePercentFat = trimIfExists(array[141]);
	scan.ArmLeftTissuePercentFat = trimIfExists(array[142]);
	scan.ArmsDiffTissuePercentFat = trimIfExists(array[143]);
	scan.LegsTissuePercentFat = trimIfExists(array[144]);
	scan.LegRightTissuePercentFat = trimIfExists(array[145]);
	scan.LegLeftTissuePercentFat = trimIfExists(array[146]);
	scan.LegsDiffTissuePercentFat = trimIfExists(array[147]);
	scan.TrunkTissuePercentFat = trimIfExists(array[148]);
	scan.TrunkRightTissuePercentFat = trimIfExists(array[149]);
	scan.TrunkLeftTissuePercentFat = trimIfExists(array[150]);
	scan.TrunkDiffTissuePercentFat = trimIfExists(array[151]);
	scan.AndroidTissuePercentFat = trimIfExists(array[152]);
	scan.GynoidTissuePercentFat = trimIfExists(array[153]);
	scan.TotalTissuePercentFat = trimIfExists(array[154]);
	scan.TotalRightTissuePercentFat = trimIfExists(array[155]);
	scan.TotalLeftTissuePercentFat = trimIfExists(array[156]);
	scan.TotalDiffTissuePercentFat = trimIfExists(array[157]);
	scan.TBW = trimIfExists(array[158]);
	scan.ICW = trimIfExists(array[159]);
	scan.ECW = trimIfExists(array[160]);
	scan.TBWDevice = trimIfExists(array[161]);

	return scan;
}

connection.close();
