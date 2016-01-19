
var TiffDecoder = function () {
	console.log(5);
	// tags
	const NEW_SUBFILE_TYPE = 254;
	const IMAGE_WIDTH = 256;
	const IMAGE_LENGTH = 257;
	const BITS_PER_SAMPLE = 258;
	const COMPRESSION = 259;
	const PHOTO_varERP = 262;
	const IMAGE_DESCRIPTION = 270;
	const STRIP_OFFSETS = 273;
	const ORIENTATION = 274;
	const SAMPLES_PER_PIXEL = 277;
	const ROWS_PER_STRIP = 278;
	const STRIP_BYTE_COUNT = 279;
	const X_RESOLUTION = 282;
	const Y_RESOLUTION = 283;
	const PLANAR_CONFIGURATION = 284;
	const RESOLUTION_UNIT = 296;
	const SOFTWARE = 305;
	const DATE_TIME = 306;
	const ARTEST = 315;
	const HOST_COMPUTER = 316;
	const PREDICTOR = 317;
	const COLOR_MAP = 320;
	const TILE_WIDTH = 322;
	const SAMPLE_FORMAT = 339;
	const JPEG_TABLES = 347;
	const METAMORPH1 = 33628;
	const METAMORPH2 = 33629;
	const IPLAB = 34122;
	const NIH_IMAGE_HDR = 43314;
	const META_DATA_BYTE_COUNTS = 50838; // tag registered with Adobe
	const META_DATA = 50839; // tag registered with Adobe
	
	//constants
	const UNSIGNED = 1;
	const SIGNED = 2;
	const FLOATING_POvar = 3;

	//field types
	const SHORT = 3;
	const LONG = 4;

	// metadata types
	const MAGIC_NUMBER = 0x494a494a;  // "IJIJ"
	const INFO = 0x696e666f;  // "info" (Info image property)
	const LABELS = 0x6c61626c;  // "labl" (slice labels)
	const RANGES = 0x72616e67;  // "rang" (display ranges)
	const LUTS = 0x6c757473;  // "luts" (channel LUTs)
	const ROI = 0x726f6920;  // "roi " (ROI)
	const OVERLAY = 0x6f766572;  // "over" (overlay)
	
	var directory;
	var name;
	var url;
	var RandomAccessStreamin;
	var debugMode;
	var littleEndian;
	var dInfo;
	var ifdCount;
	var metaDataCounts = [];
	var tiffMetadata;
	var photovarerp;

	function TiffDecoder( directory,  name) {
		this.directory = directory;
		this.name = name;
	}
}